import Image from "next/image";
import TagCard from "./tag-card";
import { ObjectId } from "mongoose";
import Link from "next/link";

interface ArticalCardProps {
    slug:string
    title: string;
    imageUrl: string;
    description:string;
    tags: { _id: ObjectId; name: string }[];
}
export default function ArticalCard({slug,description, title, imageUrl, tags}: ArticalCardProps) {

  return (
    <div className="flex flex-col w-full md:flex-row items-center bg-dark-2 text-white p-4 md:p-6 rounded-sm shadow-lg  mx-auto">
      {/* Image */}
      <div className="w-full md:w-1/3">
        <div className="relative w-full h-60 rounded-lg overflow-hidden">
          <Image
            src={imageUrl} // Ensure this path is correct
            alt="Enums"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:ml-6 mt-4 md:mt-0 w-full md:w-2/3 text-center md:text-left">
       <Link href={`/blog/${slug}`}><h2 className="text-xl font-bold hover:underline">{title}</h2></Link> 
        <p className="text-gray-400 mt-2 text-sm">
          {description}
        </p>
        <div className="flex items-center gap-2 my-3 justify-center md:justify-normal  flex-wrap ">
            {
                tags.map((tag)=>(<TagCard key={tag.name} id={tag._id} name={tag.name} />))
            }
        </div>
        {/* Author */}
        <div className="flex items-center justify-center md:justify-start mt-4">
          <Image
            src="/profile.jpg" 
            alt="Matt Pocock"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="ml-2 text-sm font-medium">Khalid kakar </p>
        </div>
      </div>
    </div>
  );
}

