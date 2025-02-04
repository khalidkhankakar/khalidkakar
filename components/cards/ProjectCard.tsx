import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const ProjectCard = ({
  projectName,
  projectExplain,
  projectImg,
  projectLink,
  projectCodeLink,
  projectTechs,
}: {
  projectName: string;
  projectExplain: string;
  projectImg: string;
  projectLink: string;
  projectCodeLink: string;
  projectTechs: string[];
}) => {
  return (
    <div className="card-style rounded-xl ">
      {/* project Img */}
      <div className="rounded-lg bg-slate-800 p-3">
        <Image
          src={projectImg}
          width={500}
          height={500}
          alt="img"
          className="mx-auto h-[200px] w-full object-contain md:h-[250px]"
        />
      </div>
      {/* project explaination */}
      <div className="my-3">
        <h3 className="text-[20px] font-bold tracking-wide text-white md:text-[32px]">
          {projectName}
        </h3>
        <p className="text-[10px] font-light tracking-wider text-purple-1 md:text-[12px] md:tracking-wide">
          {projectExplain}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {/* used techs */}
          <div className="flex items-center space-x-1 md:space-x-2">
            {/* map techs */}
            {projectTechs.map((projectTechImg) => (
              <Image
                key={projectTechImg}
                src={projectTechImg}
                className="h-6 w-6  object-contain"
                width={28}
                height={28}
                alt={"img"}
              />
            ))}
          </div>

          <div className="flex items-center justify-center space-x-1 md:space-x-2">
            <Link
              href={projectCodeLink}
              className="flex items-center justify-center text-[10px] md:text-sm font-light text-white hover:text-purple-1"
            >
              view code
              <GoArrowUpRight className="text-white" />
            </Link>

            <Link
              href={projectLink}
              className="flex items-center justify-center text-[10px] md:text-sm font-light text-white hover:text-purple-1"
            >
              check site
              <GoArrowUpRight className="text-white" />
            </Link>
          </div>
          {/* site link */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
