'use server';

import Blog from "@/db/schemas/blog.schema";
import TagBlog from "@/db/schemas/tag-blog.schema";
import Tag, { ITagDoc } from "@/db/schemas/tag.schema";
import connectDB from "@/lib/mongoose";
import { blogSchema } from "@/lib/validation";
import { put } from "@vercel/blob";
import mongoose from "mongoose";
import slugify from "slugify";


export const createBlog = async (formData: FormData) => {
    try {

        await connectDB();
        const newSchema = {
            image: formData.getAll('image')[0],
            title: formData.get('title') as string,
            tags: JSON.parse(formData.get('tags') as string),
            content: formData.get('content') as string,
            description: formData.get('description') as string,
        }
        const parsedData = blogSchema.safeParse(newSchema)

        if (!parsedData.success) return { success: false, message: parsedData.error.errors[0].message }

        const { title, content, image, tags, description } = parsedData.data
        let imageUrl = ''
        if (image) {
            const { url } = await put(image?.name, image, { access: 'public' });
            imageUrl = url
        }

        const blogSlug = slugify(title, { lower: true })
        const existingBlogSlug = await Blog.findOne({ slug: blogSlug })

        if (existingBlogSlug) return { success: false, message: "Blog with same title already exists" }


        // create the tags 
        let tagsId = []
        for (const tag of tags) {
            let existingTag = await Tag.findOne({ name: tag })
            if (!existingTag) {
                existingTag = await Tag.create({ name: tag, blogs: 1 })
            }
            else {
                existingTag = await Tag.findOneAndUpdate({ name: tag }, { $inc: { blogs: 1 } }, { new: true })
            }
            tagsId.push(existingTag._id)
        }


        const createNewBlog = await Blog.create({
            title,
            slug: blogSlug,
            image: imageUrl,
            tags: [...tagsId],
            description,
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

        return { success: true, message: "Blog created successfully" }
    } catch (error) {
        console.log(error)
        return { success: false, message: "Failed to create blog try again" }

    }
}

export const getBlog = async (slug: string) => {
    await connectDB();
    const blog = await Blog.findOne({ slug }).populate('tags', 'name')
    return JSON.parse(JSON.stringify(blog));
}

export const getAllBlogs = async () => {
    await connectDB();
    const blogs = await Blog.find().populate('tags', 'name').select('-content')
    return blogs;
}

export const editBlog = async (blogId: string, formData: FormData) => {

    if (!blogId) return;

    try {
        await connectDB();
        const imageFile = formData.getAll("image")[0] as File | undefined;
        const newSchema = {
          image: imageFile instanceof File ? imageFile : undefined, // Ensure valid File object
          title: formData.get("title") as string,
          tags: JSON.parse(formData.get("tags") as string),
          content: formData.get("content") as string,
          description: formData.get("description") as string,
        };
        const parsedData = blogSchema.safeParse(newSchema)

        if (!parsedData.success) {
          console.error("Validation failed:", parsedData.error.format());
          return { success: false, message: "Invalid input data", errors: parsedData.error.format() };
        }

        const { title, content, image, tags, description } = parsedData.data
        let imageUrl = ''
        console.log('image', image)
        if (image && image.size > 0 && image.name) {
          const { url } = await put(image.name, image, { access: 'public' });
          imageUrl = url;
        }

        
        const blogSlug = slugify(title, { lower: true })

        let existingBlog = await Blog.findById(blogId).populate("tags")

        if (!existingBlog) return { success: false, message: "Blog is not found with this id" }

        if (existingBlog.slug !== blogSlug) {
            const existingBlogSlug = await Blog.findOne({ slug: blogSlug })
            if (existingBlogSlug) return { success: false, message: "Blog with same title already exists" }
            existingBlog.slug = blogSlug
            await existingBlog.save();
        }
        if(image !== undefined && existingBlog.image !== imageUrl && imageUrl !== ''){
            existingBlog.image = imageUrl
            await existingBlog.save();
        }
        if (existingBlog.title !== title || existingBlog.content !== content || existingBlog.description !== description) {
            existingBlog.title = title;
            existingBlog.content = content;
            existingBlog.description = description
            await existingBlog.save();
        }

        

       const tagsToAdd = tags.filter(
          (tag) =>
            !existingBlog.tags.some((t:ITagDoc) =>
              t.name.toLowerCase().includes(tag.toLowerCase())
            )
        );

        const tagsToRemove = existingBlog.tags.filter(
          (tag:ITagDoc) =>
            !tags.some((t) => t.toLowerCase() === tag.name.toLowerCase())
        );
    
    
      
          const newTagDocuments = [];

          if (tagsToAdd.length > 0) {
            for (const tag of tagsToAdd) {
              const existingTag = await Tag.findOneAndUpdate(
                { name: { $regex: new RegExp(`^${tag}$`, "i") } },
                { $setOnInsert: { name: tag }, $inc: { blogs: 1 } },
                { upsert: true, new: true }
              );
      
              if (existingTag) {
                newTagDocuments.push({
                  tag: existingTag._id,
                  blog: blogId,
                });
      
                existingBlog.tags.push(existingTag._id);
              }
            }
          }
      

          if (tagsToRemove.length > 0) {
            const tagIdsToRemove = tagsToRemove.map((tag:ITagDoc) => tag._id);
      
            await Tag.updateMany(
              { _id: { $in: tagIdsToRemove } },
              { $inc: { blogs: -1 } },
             
            );
      
            await TagBlog.deleteMany(
              { tag: { $in: tagIdsToRemove }, blog: blogId }
            );
      
            existingBlog.tags = existingBlog.tags.filter(
              (tagId: mongoose.Types.ObjectId) => !tagsToRemove.includes(tagId)
            );
          }
          
          if (newTagDocuments.length > 0) {
            await TagBlog.insertMany(newTagDocuments);
          }

    
          await existingBlog.save();
        return { success: true, message: "Blog created successfully" }
    } catch (error) {
        console.log(error)
        return { success: false, message: "Failed to create blog try again" }

    }
}