import { devTechs } from "@/constant";
import TechCard from "./cards/TechCard";

const DevStack = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <h2 className="h2-bold text-white">
        My <span className="text-orange-1">Dev Stack</span>
      </h2>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-7">
        {devTechs.map((tech) => (
          <TechCard key={tech.name} name={tech.name} img={tech.img} />
        ))}
      </div>
    </div>
  );
};

export default DevStack;
