import React from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

function ProjectSection() {
  return (
    <div className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradientText mb-10">
        My Recent Project
      </h1>
      <div className="flex overflow-x-scroll gap-8 lg:p-3 scrollHide">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block" />
        <h2 className="font-mono uppercase gradientText text-lg">
          Slide for More
        </h2>
        <HiArrowSmRight className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block" />
      </div>
    </div>
  );
}

export default ProjectSection;
