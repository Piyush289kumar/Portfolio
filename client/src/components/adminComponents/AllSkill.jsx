import React, { useState, useEffect } from "react";
import axios from "axios";

function AllSkill() {

  const [AllSkill, setAllSkill] = useState([]);

  useEffect(() => {
    const getAllSkills = async () => {
      const response = await axios.get(
        "http://localhost:5001/api/v1/get-skill/"
      );
      const allSkillResponse = response.data.data;
      setAllSkill(allSkillResponse);
    };
    getAllSkills();
  }, []);
  
  return (
    <div>
      {AllSkill.map((skill, idx) => (
        <h1 className="text-5xl text-white m-5" key={idx}>
          {skill.skillName}
        </h1>
      ))}
    </div>
  );
}
export default AllSkill;
