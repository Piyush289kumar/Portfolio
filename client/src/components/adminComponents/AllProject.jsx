import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../../redux/Slice/showCaseSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";

function AllProject() {
  const [edit, setEdit] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  const [updateProjectName, setUpdateProjectName] = useState("");
  const [updateProjectDes, setUpdateProjectDes] = useState("");
  const [updateProjectGithubLink, setUpdateProjectGithubLink] = useState("");
  const [updateProjectHostedLink, setUpdateProjectHostedLink] = useState("");
  const [updatedProjectImg, setUpdatedProjectImg] = useState("");

  const allProject = useSelector((state) => state.showcase.project);
  const dispatch = useDispatch();

  const getAllProject = async () => {
    const response = await axios.get(
      "http://localhost:5001/api/v1/get-project/"
    );
    const resData = await response.data.data;
    console.log("resData");
    console.log(resData);
    dispatch(setProject(resData));
  };

  useEffect(() => {
    getAllProject();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white lg:h-[80vh]">
      {allProject.map((project, idx) => (
        <div
          key={project._id}
          className="flex flex-col border-2 w-[80vw] lg:w-[40vw] rounded-lg p-2 gap-3"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <img
              src={project.img}
              alt={project.name}
              className={`w-fit h-[180px] lg:w-[200px] lg:h-auto`}
            />
            <input
              type="file"
              name="img"
              id="img"
              accept="img"
              className={`${edit && "hidden"}`}
            />

            <div className="flex flex-col gap-2">
              <h1
                className={`text-xl lg:text-3xl ${
                  edit &&
                  selectedProject === project._id &&
                  "bg-indigo-500 bg-opacity-30"
                }`}
              >
                {edit ? (
                  <input
                    type="text"
                    name="name"
                    id="nmae"
                    value={
                      selectedProject === project_.id
                        ? updateProjectName
                        : project.name
                    }
                    onChange={(event) =>
                      setUpdateProjectName(event.target.value)
                    }
                    className="w-full bg-transparent"
                  />
                ) : (
                  project.name
                )}
              </h1>

              <div>
                <label htmlFor="des">Desc: </label>
                <h1
                  className={`text-sm lg:text-base text-gray-300 ${
                    edit &&
                    selectedProject === project._id &&
                    "bg-indigo-500 bg-opacity-30"
                  }`}
                >
                  {edit ? (
                    <input
                      type="text"
                      name="des"
                      id="des"
                      value={
                        selectedProject === project._id
                          ? updateProjectDes
                          : project.description
                      }
                      onChange={(event) =>
                        setUpdateProjectDes(event.target.value)
                      }
                      className="w-full bg-transparent"
                    />
                  ) : (
                    project.description
                  )}
                </h1>
              </div>

              <div>
                <label htmlFor="githubLink">Github Link: </label>
                <h1>
                  {edit? true : false}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllProject;
