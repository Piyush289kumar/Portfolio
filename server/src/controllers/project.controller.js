import { Project } from "../models/Project.model.js";
import { ApiError, ApiResponse, asycHandler } from "../utils/index.js";

const getProjects = asycHandler(async (req, res) => {
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
