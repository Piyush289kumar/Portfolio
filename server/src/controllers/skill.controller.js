import { Skill } from "../models/Skill.model";
import { ApiError, ApiResponse, asycHandler } from "../utils";
const getSkills = asycHandler(async (_, res) => {
	try {
		const skills = await Skill.find();
		if (!skills) {
			return res
				.status(404)
				.json(new ApiResponse(404, false, {}, "Skill Not Found"));
		}
		return res
			.status(200)
			.json(new ApiResponse(200, true, skills, "Skill Fetch"));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while Fetching Skills Data."
		);
	}
});
const addSkill = asycHandler(async (req, res) => {
	try {
		const { skillName, skillLevel } = req.body;
		if (!skillName && !skillLevel) {
			throw new ApiError(411, false, "All Fields are required...");
		}
		const createSkill = await Skill.create({ skillName, skillLevel });
		if (!createSkill) {
			return res
				.status(411)
				.json(new ApiResponse(411, true, {}, "Skill is Not Created.."));
		}
		const saveSkill = await createSkill.save();
		if (!saveSkill) {
			return res
				.status(411)
				.json(new ApiResponse(411, true, {}, "Skill is not Save..."));
		}
		return res
			.status(200)
			.json(new ApiResponse(201, true, {}, "Skill is added"));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while Adding a new skill"
		);
	}
});
const removeSkill = asycHandler(async (req, res) => {
	try {
		const { skill_id } = req.params;
		if (!skill_id) {
			throw new ApiError(411, false, "Skill Id is missing.");
		}
		const removeSkillInDB = await Skill.findByIdAndDelete(skill_id);
		if (!removeSkillInDB) {
			return res
				.status(411)
				.json(new ApiResponse(401, false, {}, "Skill is not Remove."));
		}
		return res
			.status(200)
			.json(
				new ApiResponse(200, true, {}, "Skill is removed successfully.")
			);
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while removing a skill.."
		);
	}
});
export { getSkills, addSkill, removeSkill };
