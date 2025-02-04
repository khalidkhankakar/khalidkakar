import BlogForm from '@/components/forms/blog-form'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen overflow-y-auto max-w-[85%] lg:max-w-5xl mx-auto px-4  py-20 text-white '>
        <h1 className='my-3 text-4xl text-center font-bold uppercase'>Create Blog</h1>
        <BlogForm />
    </div>
  )
}

export default page
