import React from "react";
import avatar from "../assets/images/avatar.png";

function HomeCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradientText">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl text-justify">
          Thank you for allowing me to introduce myself. My name is
          <b> Piyush Kumar Raikwar</b> and my hometown is Jabalpur. I completed
          my bachelor of computer application with the CGPA of 8.2 from
          makhanlal University.
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl text-justify">
          First of all, I want to introduce myself with my technical skills
          include multiple technologies like
          <b> PHP, React Js, Express Js, Node Js, MySQL and MongoDB Database</b>.
          Also, I have a good command of advance MS-Office and web technologies
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl text-justify">
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={avatar}
          alt="Profile Picture"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] drop-shadow-md cursor-pointer hover:scale-105 transition-all delay-100 mx-auto"
        />
      </div>
    </div>
  );
}

export default HomeCard;
