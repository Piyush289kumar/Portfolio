import { Router } from "express";
import { signup } from "../controllers/user.controller.js";

const router = Router();
router.route("/signup").post(signup);
router.route("/signin").post(signin);

export default router;
