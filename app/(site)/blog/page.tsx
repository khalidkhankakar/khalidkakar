import { getAllBlogs } from '@/actions/blog.action';
import ArticalCard from '@/components/cards/artical-card'
import { HeroHighlight } from '@/components/ui/hero-highlight';
import { GetBlogType } from '@/types/action';
import React from 'react'

const page = async () => {
  const blogs = await getAllBlogs();
  if (blogs.data.length <= 0) {
    return (<div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-4xl mx-auto  py-20 text-white '>No blog found</div>);
  };
  console.log(blogs);
  return (
    <HeroHighlight className='w-full'>
      <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-4xl mx-auto   py-20 text-white '>
        <div className='flex items-center flex-col gap-y-3 '>
          {
            blogs?.data?.map((blog: GetBlogType,index) => (
            <ArticalCard
              key={blog.slug + index}
              slug={blog.slug}
              title={blog.title}
              imageUrl={blog.image}
              description={blog.description}
              tags={blog.tags} />))

          }

        </div>

      </div>
    </HeroHighlight>
  )
}

export default page
