import { Router } from "express";
import {
	getAuthUser,
	getUserDetail,
	logout,
	renewRefreshToken,
	signin,
	signup,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
	addSkill,
	getSkills,
	removeSkill,
} from "../controllers/skill.controller.js";
import {
	addProject,
	getProjects,
	removeProject,
	updateProject,
} from "../controllers/project.controller.js";
import { contact } from "../controllers/contact.controller.js";

const router = Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").get(verifyJWT, logout);
router.route("/get-user").get(getUserDetail);
router.route("/get-admin").get(verifyJWT, getAuthUser);
router.route("/refresh").post(renewRefreshToken);

// Skill Routes

router.route("/get-skill").get(getSkills);
router.route("/add-skill").post(verifyJWT, addSkill);
router.route("/remove-skill/:skill_id").delete(removeSkill);

// Project Route
router.route("/get-project").get(getProjects);
router.route("/add-project").post(verifyJWT, addProject);
router.route("/update-project/:project_id").put(verifyJWT, updateProject);
router.route("/delete-project/:project_id").delete(verifyJWT, removeProject);

// Contact

router.route("/contact").post(contact);

export default router;
