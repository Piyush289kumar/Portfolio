import { Project } from "../models/Project.model.js";
import { ApiError, ApiResponse, asycHandler } from "../utils/index.js";

const getProjects = asycHandler(async (_, res) => {
	try {
		const projects = await Project.find();

		if (!projects) {
			return res
				.status(404)
				.json(new ApiResponse(404, false, {}, "Project Not Found."));
		}

		return res
			.status(200)
			.json(
				new ApiResponse(200, true, projects, "Project data is fetched.")
			);
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while fetching projects."
		);
	}
});

const addProject = asycHandler(async (req, res) => {
	try {
		const {
			name,
			description,
			githubLink,
			hostedUrl,
			publicId,
			secureUrl,
			deleteToken,
		} = req.body;

		if (!name && !description) {
			throw new ApiError(
				411,
				false,
				"Project Name & Description is required."
			);
		}

		const createProject = await Project.create({
			name,
			description,
			githubLink,
			hostedUrl,
			publicId,
			img: secureUrl,
			deleteToken,
		});

		if (!createProject) {
			throw new ApiError(401, false, "Project is not created");
		}
		const saveProjectInDB = await createProject.save();
		if (!saveProjectInDB) {
			throw new ApiError(401, false, "Project is not Save in Database");
		}

		return res
			.status(201)
			.json(new ApiResponse(201, true, {}, "Project is added."));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while adding project."
		);
	}
});

export { getProjects, addProject };
