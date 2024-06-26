import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RiSignalTowerFill } from "react-icons/ri";
function ProjectCard({ title, src, GitHub, LiveLink }) {
  return (
    <div className="p-4 -m-4">
      <a href={LiveLink} target="_blank">
        <div className="h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl select-none">
          <img
            src={src}
            alt={title}
            className="lg:h-48 h-[200px] w-full object-cover lg:object-center"
          />
          <div className="p-4 flex flex-col lg:gap-3">
            <h2 className="tracking-widest font-semibold text-2xl text-white">
              {title}
            </h2>
            <h1 className="text-lg lg:text-xl font-semibold text-gray-200">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laudantium natus delectus quisquam?
            </h1>
            <div className="flex items-center justify-between mt-2 pt-2 border-2 border-transparent border-t-gray-400">
              <a href={GitHub} target="_blank">
                <AiFillGithub className="text-white font-bold inline-flex items-center text-2xl md:text-3xl md:mb-2 lg:mb-0 hover:text-sky-300 cursor-pointer" />
              </a>
              <a href={LiveLink} target="_blank">
                <RiSignalTowerFill className="text-white font-bold inline-flex items-center text-2xl md:text-3xl md:mb-2 lg:mb-0 hover:text-sky-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default ProjectCard;
