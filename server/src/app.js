import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
const fileLimit = "16kb";
app.use(express.json({ limit: fileLimit }));
app.use(express.urlencoded({ extended: true, limit: fileLimit }));
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());
export { app };
