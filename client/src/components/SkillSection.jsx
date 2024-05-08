import React, { useEffect } from "react";
import SkillCard from "./SkillCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSkill } from "../redux/Slice/showCaseSlice";


function SkillSection() {
  const skillData = useSelector((state) => state.showcase.skill);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllSkills();
  }, []);

  const getAllSkills = async () => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/get-skill`);
    const skillData = response.data.data.reverse();
    dispatch(setSkill(skillData));
  };

  return (
    <div data-aos="zoom-in-up" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradientText mb-10">My Skills</h1>
      <div className="h-[300px] overflow-y-scroll select-none scrollBar cursor-pointer">
        {skillData.map((skill, idx) => (
          <SkillCard
            key={idx}
            technology={skill.skillName}
            value={skill.skillLevel}
          />
        ))}
      </div>
    </div>
  );
}
export default SkillSection;
