import { Router } from "express";
import {
	getAuthUser,
	getUserDetail,
	logout,
	signin,
	signup,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").get(verifyJWT, logout);
router.route("/get-user").get(getUserDetail);
router.route("/get-admin").get(verifyJWT, getAuthUser);

export default router;
