import { getBlog } from '@/actions/blog.action';
import BlogForm from '@/components/forms/blog-form';
import {  redirect } from 'next/navigation';
import React from 'react'

interface Props {
    params: {
        slug: string
    }
}

const page = async ({ params }: Props) => {

    const { slug } = params;
    const blog = await getBlog(slug);
    if(!blog) return redirect('/blog');

    const blogTagArr = blog?.tags?.map((tag: any) => tag.name)

  return (
    <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4  py-20 text-white '>
        <h1 className='my-3 text-4xl text-center font-bold uppercase'>Edit Blog</h1>
        <BlogForm blogId={blog._id} blogTitle={blog.title} blogContent={blog.content} blogImage={blog.image} blogDesc={blog.description} blogTags={blogTagArr} isEdit />
    </div>
  )
}

export default page
