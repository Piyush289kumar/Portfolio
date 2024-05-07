import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProject } from "../../redux/Slice/showCaseSlice";
function AllProject() {
  const allProject = useSelector((state) => state.showcase.project);
  const dispatch = useDispatch();
  const getAllProject = async () => {
    const response = await axios.get(
      "http://localhost:5001/api/v1/get-project/"
    );
    const resData = await response.data.data;
    dispatch(setProject(resData));
  };
  useEffect(() => {
    getAllProject();
  }, []);
  return (
    <div>
      {allProject.map((project, idx) => (
        <h1 key={idx} className="text-white text-3xl">
          {project.name}
        </h1>
      ))}
    </div>
  );
}
export default AllProject;
