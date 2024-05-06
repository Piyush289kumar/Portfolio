import React, { useEffect, useState } from "react";
import axios from "axios";

function AllProject() {
  
  const [AllProject, setAllProject] = useState([]);

  useEffect(() => {
    const getAllProject = async () => {
      const response = await axios.get(
        "http://localhost:5001/api/v1/get-project/"
      );
      const allProjectRes = response.data.data;

      console.log("allProjectRes");
      console.log(allProjectRes);
      setAllProject(allProjectRes);

      console.log(AllProject);
    };
    getAllProject();
  }, []);

  return (
    <div>
      {AllProject.map((project, idx) => (
        <h1 key={idx}>{project.name}</h1>
      ))}
    </div>
  );
}
export default AllProject;
