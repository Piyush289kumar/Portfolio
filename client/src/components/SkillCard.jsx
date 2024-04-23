import React from "react";

function SkillCard() {
  let width = 20;
  return (
    <div className="flex justify-between items-center mt-5 backdrop-blur-xl shadow-xl p-3 border-2 rounded-lg border-gray-400 mr-2">
      <h3 className="font-bold text-xl text-white">React Js</h3>
      <div className="progressBar w-[25%] h-[25px]">
        <div className={`progressBarVal h-full w-[${width}%]`}></div>
      </div>
    </div>
  );
}

export default SkillCard;
