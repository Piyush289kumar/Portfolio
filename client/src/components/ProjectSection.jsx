import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProject } from "../redux/Slice/showCaseSlice";

function ProjectSection() {
  const scrollRef = useRef(null);
  const scrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  const allProject = useSelector((state) => state.showcase.project);
  const dispatch = useDispatch();

  const dispatchAllProjectToStore = async () => {
    const res = await axios.get("http://localhost:5001/api/v1/get-project");
    const projectResData = res.data.data.reverse();
    dispatch(setProject(projectResData));
  };

  useEffect(() => {
    dispatchAllProjectToStore();
  }, []);

  return (
    <div data-aos="fade-left" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradientText mb-10">
        My Recent Project
      </h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scrollHide"
      >
        {allProject.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name ? project.name : "404"}
            src={project.img ? project.img : "404"}
            GitHub={project.githubLink ? project.githubLink : "404"}
            LiveLink={project.hostedUrl ? project.hostedUrl : "404"}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 lg:block"
          onClick={scrollLeft}
        />
        <h2 className="font-mono uppercase gradientText text-lg">
          Slide for More
        </h2>
        <HiArrowSmRight
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 lg:block"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
}
export default ProjectSection;
