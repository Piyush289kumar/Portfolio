import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSkill } from "../../redux/Slice/showCaseSlice";

function AllSkill() {
  const allSkill = useSelector((state) => state.showcase.skill);
  const dispatch = useDispatch();

  const getAllSkills = async () => {
    const response = await axios.get("http://localhost:5001/api/v1/get-skill/");
    const allSkillResponse = response.data.data;
    dispatch(setSkill(allSkillResponse));
  };

  useEffect(() => {
    getAllSkills();
  }, []);

  return (
    <div>
      {allSkill.map((skill, idx) => (
        <h1 className="text-5xl text-white m-5" key={idx}>
          {skill.skillName}
        </h1>
      ))}
    </div>
  );
}
export default AllSkill;
