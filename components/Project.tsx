import ProjectCard from "./cards/ProjectCard";
import { projectCardsArr } from "@/constant";

const Project = () => {
  return (
    <div className="m-auto my-8 flex max-w-[90vw] flex-col items-start justify-start md:max-w-2xl lg:max-w-[80vw]">
      <h2 className="h2-bold text-white">
        My <span className="text-pink-1">Projects</span>
      </h2>

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
