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
import { generateSignature } from "../utils/generateSignature.utils.js";
import { checkUser } from "../middlewares/checkuser.middleware.js";
const router = Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);
// router.route("/logout").get(verifyJWT, logout);
router.route("/logout").get(logout);
router.route("/get-user").get(getUserDetail);
router.route("/get-admin").get(verifyJWT, getAuthUser);
router.route("/refresh").post(renewRefreshToken);
router.route("/checkUser").post(checkUser);
// Skill Routes
router.route("/get-skill").get(getSkills);
// router.route("/add-skill").post(verifyJWT, addSkill);
router.route("/add-skill").post(addSkill);
router.route("/remove-skill/:skill_id").delete(removeSkill);
// Project Route
router.route("/get-project").get(getProjects);
router.route("/add-project").post(addProject);
//router.route("/add-project").post(verifyJWT, addProject);
// router.route("/update-project/:project_id").put(verifyJWT, updateProject);
router.route("/update-project/:project_id").put(updateProject);
// router.route("/delete-project/:project_id").delete(verifyJWT, removeProject);
router.route("/delete-project/:project_id").delete(removeProject);
// Contact
router.route("/contact").post(contact);
// Signature
router.route("/signature", generateSignature);
export default router;
