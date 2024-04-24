import React from "react";

function AboutCard() {
  return (
    <div
      data-aos="zoom-in-right"
      className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradientText mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        What I Do
      </span>
      <p className="text-3xl lg:text-7xl gradientText lg:w-[85%] ">
        My Apps are well designed and optimised, captivating users and meeting
        their objectives
      </p>
    </div>
  );
}

export default AboutCard;
