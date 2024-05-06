import React, { useState, useEffect } from "react";
import axios from "axios";
function AllSkill() {
  const [AllSkill, setAllSkill] = useState([
    {
      description: "pdesnnnn",
      githubLink: "gitnm",
      hostedUrl: "Hosted Link",
      img: "https://res.cloudinary.com/des1uatms/image/upload/v1714929856/porfolio/en1ixdxnd7ylgweszbjy.jpg",
      name: "pnamenn",
    },
  ]);
  useEffect(() => {
    const getAllSkills = async () => {
      const response = await axios.get(
        "http://localhost:5001/api/v1/get-project/"
      );
      const allSkillResponse = response.data.data;
      setAllSkill(allSkillResponse);
    };
  }, []);
  return (
    <div>
      {AllSkill.map((skill, idx) => (
        <h1 className="text-5xl text-white m-5" key={idx}>
          {skill.name}
        </h1>
      ))}
    </div>
  );
}
export default AllSkill;
