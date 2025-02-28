import { frontendEndStack, backendEndStack, prodictivityStack } from "@/constant";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { BoxReveal } from "./magicui/box-reveal";

const DevStack = () => {
  // Function to generate icon URLs from Simple Icons CDN
  const generateIconUrls = (stack:string[]) =>
    stack.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  // Generate image lists for each stack
  const frontendImages = generateIconUrls(frontendEndStack);
  const backendImages = generateIconUrls(backendEndStack);
  const productivityImages = generateIconUrls(prodictivityStack);

  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <BoxReveal boxColor={"#f4ac24"} duration={0.5}>
      <h2 className="h2-bold text-white">
        My <span className="text-orange-1 font-lobster">Dev Stack</span>
      </h2>
      </BoxReveal>

      <div className="flex p-3 flex-wrap gap-3 justify-center w-full">
        {/* Frontend Stack */}
        <div className="h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[48%] lg:w-[30%]">

          <IconCloud images={frontendImages} />
          
          <p className="font-semibold text-lg my-4">Frontend Tools</p>
        </div>

        {/* Backend Stack */}
        <div className="h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[48%] lg:w-[30%]">
          <IconCloud images={backendImages} />
          <p className="font-semibold text-lg my-4">Backend Tools</p>
        </div>

        {/* Productivity Stack */}
        <div className="h-[20rem] flex flex-col m-0 p-4 items-center justify-center w-full sm:w-full md:w-[100%] lg:w-[30%]">
          <IconCloud images={productivityImages} />
          <p className="font-semibold text-lg my-4">Productivity Tools</p>
        </div>
      </div>
    </div>
  );
};

export default DevStack;
