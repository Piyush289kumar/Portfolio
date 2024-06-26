import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../../redux/Slice/showCaseSlice";
import { MdDelete, MdEdit, MdLeakRemove } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { getSignature } from "../../utils/getSignature.utils.js";
import { deleteImage } from "../../utils/deleteImage.utils.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.utils.js";
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
      `${import.meta.env.VITE_SERVER_URL}/get-project`
    );
    const resData = await response.data.data;
    dispatch(setProject(resData));
  };
  const deleteProjectHandler = async (id) => {
    alert("Are you sure you want to delete this project?");
    // const signature = await getSignature(publicId);
    // console.log(`Signature generate while Deleting : ${signature}`);
    // // Delete Image from cloudinary
    // const newData = await deleteImage(publicId, signature);
    // Delete Project from database
    const deleteProject = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/delete-project/${id}`
    );
    const dataRes = await deleteProject.data;
    alert(dataRes.message);
    getAllProject();
  };
  const handleImg = (e) => {
    const file = e.target.files[0];
    setUpdatedProjectImg(file);
  };
  const updateProjectHandler = async (id) => {
    setEdit(false);
    let uploadImg;
    if (updatedProjectImg) {
      uploadImg = await uploadOnCloudinary(updatedProjectImg);
    }
    const updatedData = {
      id: id,
      name: updateProjectName,
      description: updateProjectDes,
      githubLink: updateProjectGithubLink,
      hostedUrl: updateProjectHostedLink,
      publicId: uploadImg ? uploadImg.publicId : null,
      deleteToken: uploadImg ? uploadImg.deleteToken : null,
      img: uploadImg ? uploadImg.secureUrl : null,
    };
    const res = await axios.put(
      `${import.meta.env.VITE_SERVER_URL}/update-project/${id}`,
      updatedData
    );
    const data = await res.data;
    alert(data.message);
    getAllProject();
  };
  useEffect(() => {
    getAllProject();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white lg:h-auto">
      {allProject.map((project, idx) => (
        <div
          key={project._id}
          className="flex flex-col border-2 w-[80vw] rounded-lg p-2 gap-3"
        >
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5">
            <img
              src={project.img}
              alt={project.name}
              className={`w-fit h-auto lg:w-[450px] rounded-lg ${
                edit && "hidden"
              }`}
            />
            <input
              type="file"
              name="img"
              id="img"
              accept="img"
              onChange={handleImg}
              className={`${edit ? "block" : "hidden"}`}
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
                      selectedProject === project._id
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
                <label htmlFor="githubLink">Github Link</label>
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
                      name="githubLink"
                      id="githubLink"
                      value={
                        selectedProject === project._id
                          ? updateProjectGithubLink
                          : project.githubLink
                      }
                      onChange={(event) =>
                        setUpdateProjectGithubLink(event.target.value)
                      }
                      className="w-full bg-transparent"
                    />
                  ) : (
                    project.githubLink
                  )}
                </h1>
              </div>
              <div>
                <label htmlFor="hostedLink">Hosted Link: </label>
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
                      name="hostedLink"
                      id="hostedLink"
                      value={
                        selectedProject === project._id
                          ? updateProjectHostedLink
                          : project.hostedUrl
                      }
                      onChange={(event) =>
                        setUpdateProjectHostedLink(event.target.value)
                      }
                      className="w-full bg-transparent"
                    />
                  ) : (
                    project.hostedUrl
                  )}
                </h1>
              </div>
            </div>
            <div className="flex lg:flex-col justify-between items-center rounded-lg gap-3 px-3 py-2 bg-indigo-500 bg-opacity-30 text-2xl">
              <MdEdit
                className={`hover:scale-150 transition-all delay-100 ease-linear cursor-pointer hover:text-red-500 ${
                  edit && selectedProject === project._id ? "hidden" : "block"
                }`}
                onClick={() => {
                  setEdit(!edit);
                  setSelectedProject(project._id);
                  setUpdateProjectName(project.name);
                  setUpdateProjectDes(project.description);
                  setUpdateProjectGithubLink(project.githubLink);
                  setUpdateProjectHostedLink(project.hostedUrl);
                }}
              />
              <TiTick
                className={`hover:scale-150 transition-all ease-linear delay-100 cursor-pointer hover:text-green-500 ${
                  edit && selectedProject === project._id ? "block" : "hidden"
                }`}
                onClick={() =>
                  updateProjectHandler(project._id, project.publicId)
                }
              />
              <MdDelete
                className={`hover:scale-150 transition-all ease-linear delay-100 cursor-pointer hover:text-red-500`}
                onClick={() =>
                  deleteProjectHandler(project._id, project.publicId)
                }
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default AllProject;
