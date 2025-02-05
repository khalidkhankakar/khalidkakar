'use server';

import Blog from "@/db/schemas/blog.schema";
import TagBlog from "@/db/schemas/tag-blog";
import Tag from "@/db/schemas/tag.schema";
import connectDB from "@/lib/mongoose";
import { blogSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import slugify from "slugify";

export const createBlog = async (formData: FormData) => {
    await connectDB();
    const newSchema = {
        image: formData.getAll('image')[0],
        title: formData.get('title') as string,
        tags: JSON.parse(formData.get('tags') as string),
        content: formData.get('content') as string,
    }
    const parsedData = blogSchema.safeParse(newSchema)

    if (!parsedData.success) return { error: parsedData.error.errors[0].message }

    const { title, content, image, tags } = parsedData.data
    let imageUrl = ''
    if (image) {
        const { url } = await put(image?.name, image, { access: 'public' });
        imageUrl = url
    }

    const blogSlug = slugify(title, { lower: true })
    const existingBlogSlug = await Blog.findOne({ slug: blogSlug })

    if (existingBlogSlug) return { error: "Blog with same title already exists" }
    console.log('THESE ARE TAGS', tags)

    // create the tags 
    let tagsId = []
    for (const tag of tags) {
        let existingTag = await Tag.findOne({ name: tag })
        if (!existingTag) {
            existingTag = await Tag.create({ name: tag, questions: 1 })
        }
        else {
            existingTag = await Tag.findOneAndUpdate({ name: tag }, { $inc: { questions: 1 } }, { new: true })
        }
        tagsId.push(existingTag._id)
    }
    console.log("AFTER TAGS ID")
    console.log({ tagsId })
    const createNewBlog = await Blog.create({
        title,
        slug: blogSlug,
        image: imageUrl,
        tags: [...tagsId],
        content
    })

    if (!createNewBlog) return { error: "Failed to create blog" }

    // create TagBlog realationship
    for (const tag of tagsId) {
        await TagBlog.create({
            tag,
            blog: createNewBlog._id
        })
    }

    return { success: "Blog created successfully" }

}

export const getBlog = async (slug: string) => {
    await connectDB();
    const blog = await Blog.findOne({ slug }).populate('tags')
    console.log(blog)
    return blog;
}

export const getAllBlogs = async () => {
    await connectDB();
    // exclude content filed
    const blogs = await Blog.find().populate('tags').select('-content')
    return blogs;
}