import Link from "next/link"
import { MagicCard } from "../magicui/magic-card";
import TagCard from "./tag-card";
const BlogCard = ({ title, desc, tags , readTime,link}:{title:string,desc:string,tags:string[], readTime:string,link:string}) => {
  return (
    <MagicCard  className=" bg-dark-2 rounded-[1rem] card-style2 border-t-4  font-sans">
      <div className="flex flex-col items-start justify-center space-x-0 md:items-center md:space-x-3">
        <div>
          {/* heading */}
          <Link href={link} target="_blank" className="text-[24px] font-semibold text-white">
            {title}
          </Link>
          {/* paragraph */}
          <p className="text-[13px] font-light tracking-wider text-purple-1 md:tracking-wide">
            {desc.substring(0,200)}....
          </p>
        </div>

        <div className="flex items-center flex-wrap justify-around w-full gap-2  mt-10 ">
            {/* map the tags */}
            <div className="flex  gap-1 flex-wrap  items-center justify-start md:justify-end">
               { tags.map((tag)=>(
            <TagCard id={tag} name={tag} key={tag} />
 
                ))}
            </div>
            {/* reading time */}
            <p className="text-[12px] font-light tracking-wider text-purple-1 md:tracking-wide">{readTime}</p>
        </div>
      </div>


    </MagicCard>
  );
};

export default BlogCard;
