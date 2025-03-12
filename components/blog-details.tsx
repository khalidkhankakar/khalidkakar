import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TagCard from './cards/tag-card'
import { ObjectId } from 'mongoose'
import { calculateReadingTime, formatDate } from '@/lib/utils'

interface Props {
    _id:ObjectId
   title:string
   content:string
   tags:{ _id:ObjectId,name:string}[],
   imageUrl:string,
   createdAt:Date

}

const BlogDetails = ({title,content,tags,imageUrl,createdAt}:Props) => {
    return (
        <div className='flex items-center flex-col gap-y-3' >
            <div className="w-full">
                <Image src={imageUrl} width={1000} height={700} alt="cloundinary" className='w-full object-contain p-4 h-44' />
            </div>
            <div className='flex items-center justify-center gap-y-3 flex-col'>
                <Link className='group my-3 flex items-center text-purple-1 hover:text-purple-2 gap-1 text-sm text-primary opacity-75 transition hover:opacity-100 sm:mb-8 sm:text-base' href={'/blog'}><ArrowLeft /> <span>All Articals</span></Link>
                <h1 className='block tracking-wider text-balance text-center font-lobster text-4xl font-bold sm:text-4xl md:text-5xl'>
                    {title}
                </h1>
                <div className='w-full md:w-2/3 my-4 space-y-3 mx-auto'>
                    <div className='flex items-center justify-center gap-3 flex-wrap '>
                        {tags.map((tag)=>(
                            <TagCard key={tag.name} id={tag._id} name={tag.name} />))
                        }
                    </div>
                    <div className=' flex items-center justify-center gap-3 '>
                        <div className='flex my-3 items-center gap-2'>
                            <span className='text-[10px] md:text-xs opacity-50'>Published on</span>
                            <span className='text-[10px] md:text-xs font-semibold  '>{formatDate(createdAt)}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-[10px] md:text-xs opacity-50'>Read time</span>
                            <span className='text-[10px] md:text-xs font-semibold'>{calculateReadingTime(content)}</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 mx-auto justify-center my-2 md:my-3">
                    <Image src={'/profile.jpg'} width={100} height={100} alt="css" className='rounded-full w-16 h-16' />
                    <div className='w-full md:w-1/2 '>
                        <p className='text-lg font-bold'>Khalid Kakar</p>
                        <p className='text-xs md:text-sm  opacity-50'>Khalid simplifies complex modern web development topics into simple words with expertise in Next.js and React.js</p>
                    </div>
                </div>


            </div>

            <div
                className='prose-headings:font-title font-default prose mt-4 dark:prose-invert focus:outline-none'
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>

        </div>
    )
}

export default BlogDetails
