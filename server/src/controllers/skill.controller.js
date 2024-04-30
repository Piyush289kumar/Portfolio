import { Skill } from "../models/Skill.model";
import { ApiError, ApiResponse, asycHandler } from "../utils";

const getSkills = asycHandler(async (req, res) => {
	try {
		const skills = await Skill.find();

		if (!skills) {
			return res
				.status(404)
				.json(new ApiResponse(404, false, "Skill Not Found"));
		}

		return res.status(200).json(new ApiResponse(200, true, skills));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while Fetching Skills Data."
		);
	}
});

export { getSkills };
