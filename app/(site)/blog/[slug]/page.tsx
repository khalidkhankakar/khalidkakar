import { getBlog } from '@/actions/blog.action';
import BlogDetails from '@/components/blog-details';
import { redirect } from 'next/navigation';
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

    return (
        <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4  py-20 text-white'>
         <BlogDetails _id={blog._id} title={blog.title} content={blog.content} tags={blog.tags} imageUrl={blog.image} createdAt={blog.createdAt} />
        </div>
    )
}

export default page
