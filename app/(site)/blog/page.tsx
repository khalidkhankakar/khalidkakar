import { getAllBlogs } from '@/actions/blog.action';
import ArticalCard from '@/components/cards/artical-card'
import { HeroHighlight } from '@/components/ui/hero-highlight';
import React from 'react'

const page = async () => {
  const blogs = await getAllBlogs();
  return (
    <HeroHighlight className='w-full'>
    <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-4xl mx-auto   py-20 text-white '>
      <div className='flex items-center flex-col gap-y-3 '>
        {
          blogs.map((blog) => (<ArticalCard  key={blog._id} slug={blog.slug} title={blog.title} imageUrl={blog.image} description={blog.description} tags={blog.tags} />))
        }

      </div>
   
    </div>
    </HeroHighlight>
  )
}

export default page
