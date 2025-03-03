import { projectCardsArr } from "@/constant";
import { BoxReveal } from "./magicui/box-reveal";
import { ProjectCard } from "./cards/project-card";

const Project = () => {
  return (
    <div id="project" className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">

      

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
