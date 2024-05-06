import React, { useState } from "react";
import axios from "axios";

function CreateSkill() {
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const handleAddSkill = async (event) => {
    event.preventDefault();

    if (!skillName && !skillLevel) {
      return console.log("Please Fill all the requird Fields");
    }

    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/add-skill",
        {
          skillName: skillName,
          skillLevel: skillLevel,
        }
      );

      alert(response.data.message);
      setSkillName("");
      setSkillLevel("");
    } catch (error) {
      return console.log(error.message || "Form Error at Skill Add Form");
    }
  };

  return (

    <div className="backdrop-blur-3xl rounded-3xl w-fit mx-auto mt-10 p-10 border border-white shadow-2xl">
      {/* <h1>Env = {process.env.CORE_URL}</h1> */}
      <h1 className="text-3xl lg:text-5xl text-white mb-7 px-3">
        Create Skill
      </h1>

      <form className="flex flex-col gap-3" onSubmit={handleAddSkill}>
        <input
          type="text"
          name="skillName"
          id="skillName"
          required
          placeholder="Skill Name"
          value={skillName}
          onChange={(event) => setSkillName(event.target.value)}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText"
        />

        <input
          type="text"
          name="skillLevel"
          id="skillLevel"
          placeholder="Skill Level"
          required
          value={skillLevel}
          onChange={(event) => setSkillLevel(event.target.value)}
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText"
        />

        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 border rounded-full mx-auto w-64 font-bold text-xl text-white"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
}

export default CreateSkill;
