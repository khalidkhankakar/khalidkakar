import React from "react";
import { blogCards, } from "@/constant";
import BlogCard from "./cards/BlogCard";
import Button from "./Button";
import { BoxReveal } from "./magicui/box-reveal";

const Blog = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <BoxReveal boxColor={"#00fcce"} duration={0.5}>
        <h2 className="h2-bold text-white">
          Latest <span className="text-cyan-1 font-lobster">Blog Post</span>
        </h2>
      </BoxReveal>
      <div className="mt-6 grid grid-cols-1 justify-center gap-5 lg:grid-cols-2">
        {blogCards.map(
          ({
            title,
            desc,
            tags,
            readTime,
            link
          }) => (
            <BlogCard
              key={title}
              title={title}
              desc={desc}
              tags={tags}
              readTime={readTime}
              link={link}
            />
          ),
        )}
      </div>
      <div className="flex items-center justify-center py-2 w-full">

        <Button label={"See more"} href={"https://dev.to/khalidkhankakar"} />
      </div>
    </div>
  );
};

export default Blog;
