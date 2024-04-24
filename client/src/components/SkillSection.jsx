import React from "react";
import SkillCard from "./SkillCard";
const skillData = [
  { technology: "PHP", value: "40" },
  { technology: "MySQL", value: "25" },
  { technology: "React Js", value: "20" },
  { technology: "Node Js", value: "35" },
  { technology: "Express Js", value: "25" },
  { technology: "MongoDB", value: "20" },
  { technology: "Corel Draw", value: "35" },
];
function SkillSection() {
  return (
    <div data-aos="zoom-in-up" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradientText mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scrollBar cursor-pointer">
        {skillData.map((skill, idx) => (
          <SkillCard
            key={idx}
            technology={skill.technology}
            value={skill.value}
          />
        ))}
      </div>
    </div>
  );
}
export default SkillSection;
