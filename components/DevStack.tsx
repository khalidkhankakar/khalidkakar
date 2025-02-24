import { devTechs } from "@/constant";
import TechCard from "./cards/TechCard";

import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


const DevStack = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
<h2 className="h2-bold text-white">
  My <span className="text-orange-1 font-lobster">Dev Stack</span>
</h2>
   
<div className="flex  p-3 flex-wrap  gap-3 justify-center w-full ">
  {/* Card 1 */}
  <div className=" h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[48%] lg:w-[30%]">
    <IconCloud images={images} />
    <p className="font-semibold text-lg my-4 ">Frontend Stack</p>
  </div>

  {/* Card 2 */}
  <div className=" h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[48%] lg:w-[30%]">
    <IconCloud images={images} />
    <p className="font-semibold text-lg my-4 ">Frontend Stack</p>
  </div>

  {/* Card 3 */}
  <div className=" h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[100%] lg:w-[30%]">
    <IconCloud images={images} />
    <p className="font-semibold text-lg my-4 ">Frontend Stack</p>
  </div>
</div>

</div>
  );
};

export default DevStack;



