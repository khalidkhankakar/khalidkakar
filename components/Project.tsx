import { projectCardsArr } from "@/constant";
import { BoxReveal } from "./magicui/box-reveal";
import { ProjectCard } from "./cards/project-card";

const Project = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">

      <BoxReveal boxColor={"#da1beb "} duration={0.5}>
        <h2 className="h2-bold text-white">
          My <span className="text-pink-1 font-lobster">Projects</span>
        </h2>
      </BoxReveal>

      <div className="mt-6 grid w-full grid-cols-1 justify-center gap-5 lg:grid-cols-2">
        {projectCardsArr.map((project) => (
          <ProjectCard
            key={project.projectName}
            projectName={project.projectName}
            projectExplain={project.projectExplain}
            projectImg={project.projectImg}
            projectLink={project.projectLink}
            projectCodeLink={project.projectCodeLink}
            projectTechs={project.projectTechs}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
