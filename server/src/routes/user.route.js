import { Router } from "express";
import { logout, signin, signup } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);
router.route("/logout").get(verifyJWT, logout);

export default router;
