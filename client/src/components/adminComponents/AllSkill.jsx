import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSkill } from "../../redux/Slice/showCaseSlice.js";
import { MdDelete } from "react-icons/md";
function AllSkill() {
  const allSkill = useSelector((state) => state.showcase.skill);
  const dispatch = useDispatch();
  const getAllSkills = async () => {
    const response = await axios.get("http://localhost:5001/api/v1/get-skill/");
    const allSkillResponse = response.data.data;
    dispatch(setSkill(allSkillResponse));
  };
  const handleRemoveSkill = async (receviedId) => {
    const response = await axios.delete(
      `http://localhost:5001/api/v1/remove-skill/${receviedId}`
    );
    const data = await response.data;
    alert(data.message);
    getAllSkills();
  };
  useEffect(() => {
    getAllSkills();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-3">
      {allSkill.map((skill, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center text-3xl lg:text-2xl text-white px-11 py-5 border w-[80vw] lg:w-[30vw] rounded-full"
        >
          <span>{skill.skillName}</span>
          <MdDelete
            className="hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-400 text-2xl"
            onClick={() => handleRemoveSkill(skill._id)}
          />
        </div>
      ))}
    </div>
  );
}
export default AllSkill;
