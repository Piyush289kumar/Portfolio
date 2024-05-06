import React, { useState } from "react";
import { uploadOnCloudinary } from "../../utils/cloudinary.utils";
import axios from "axios";

function CreateProject() {
  const [projectName, setprojectName] = useState("");
  const [projectDes, setProjectDes] = useState("");
  const [projectImg, setProjectImg] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [hostedLink, setHostedLink] = useState("");

  const handleImage = (receivedImgEvent) => {
    const imgFile = receivedImgEvent.target.files[0];
    setProjectImg(imgFile);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    if (!projectName && !projectDes && !projectImg) {
      return console.log("Please Fill all the requird Fields");
    }

    const uploadImg = await uploadOnCloudinary(projectImg);

    if (!uploadImg) {
      return console.log("Image not uploaded");
    }

    try {
      const res = await axios.post(
        "http://localhost:5001/api/v1/add-project/",
        {
          name: projectName,
          description: projectDes,
          githubLink: githubLink,
          hostedUrl: hostedLink,
          secureUrl: uploadImg.secureUrl,
          publicId: uploadImg.publicId,
          deleteToken: uploadImg.deleteToken,
        }
      );
      alert(res.data.message);
      setprojectName("");
      setProjectDes("");
      setProjectImg("");
      setGithubLink("");
      setHostedLink("");
    } catch (error) {
      console.log(error.message || "Form Error at Project Add Form");
    }
  };

  return (
    <div className="p-3 backdrop-blur-3xl rounded-md w-fit mx-auto mt-10">
      <h1 className="text-3xl lg:text-5xl text-white mb-7 px-3">
        Create Project
      </h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmitForm}>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={projectName}
          onChange={(event) => setprojectName(event.target.value)}
          placeholder="Project Name"
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText"
        />

        <textarea
          name="des"
          rows="5"
          id="des"
          value={projectDes}
          onChange={(event) => setProjectDes(event.target.value)}
          placeholder="Project Description"
          className="bg-transparent px-3 py-2 border rounded-3xl w-full lg:w-[40vw] font-bold text-xl gradientText"
        ></textarea>

        <div>
          <label
            htmlFor="img"
            className="bg-transparent px-3 py-2 font-bold text-xl gradientText"
          >
            Project Image:
          </label>
          <input
            type="file"
            name="img"
            id="img"
            accept="image"
            required
            onChange={handleImage}
          />
        </div>

        <input
          type="text"
          name="githubLink"
          id="name"
          required
          value={githubLink}
          onChange={(event) => setGithubLink(event.target.value)}
          placeholder="Github Link"
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText"
        />

        <input
          type="text"
          name="hostedLink"
          id="name"
          required
          value={hostedLink}
          onChange={(event) => setHostedLink(event.target.value)}
          placeholder="Hosted Link"
          className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-[40vw] font-bold text-xl gradientText"
        />

        <button
          type="submit"
          className="bg-purple-500 px-3 py-2 border rounded-full mx-auto w-64 font-bold text-xl text-white"
        >
          Add Project
        </button>
      </form>
    </div>
  );
}

export default CreateProject;
