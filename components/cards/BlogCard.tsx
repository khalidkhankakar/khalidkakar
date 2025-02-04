import Link from "next/link"
const BlogCard = ({ title, desc, tags , readTime,link}:{title:string,desc:string,tags:string[], readTime:string,link:string}) => {
  return (
    <Link href={link} className=" rounded-lg card-style2 border-t-4 border-t-[#272A3C]  font-sans">
      <div className="flex flex-col items-start justify-center space-x-0 md:items-center md:space-x-3">
        <div>
          {/* heading */}
          <h3 className="text-[24px] font-semibold text-white">
            {title}
          </h3>
          {/* paragraph */}
          <p className="text-[13px] font-light tracking-wider text-purple-1 md:tracking-wide">
            {desc}
          </p>
        </div>

        <div className="flex items-center justify-around w-full  mt-10 ">
            {/* map the tags */}
            <div className="flex space-x-1  items-center justify-end">
               { tags.map((tag)=>(
            <p key={tag} className="text-[10px]  font-light tracking-wider text-purple-1 md:tracking-wide">{tag}</p>

                ))}
            </div>
            {/* reading time */}
            <p className="text-[10px] font-light tracking-wider text-purple-1 md:tracking-wide">{readTime}</p>
        </div>
      </div>


    </Link>
  );
};

export default BlogCard;
