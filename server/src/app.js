import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const app = express();
const fileLimit = "16kb";
app.use(express.json({ limit: fileLimit }));
app.use(express.urlencoded({ extended: true, limit: fileLimit }));
app.use(express.static("public"));
const corsOptions = {
	origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
// Import Route
import router from "./routes/user.route.js";
// Roter Declearation
app.use("/api/v1/", router);
app.use(cookieParser());
export { app };
