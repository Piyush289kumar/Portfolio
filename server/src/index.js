import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3001;
const app = express();

connectDB()
	.then(() => {
		app.on("error", (error) => {
			console.log(`Error: ${error}`);
			throw error;
		});

		app.use(express.json());

		app.get("/", (req, res) => {
			res.status(200).json({
				msg: "Server is Live",
			});
		});

		app.listen(PORT, () => {
			console.log(`Server is Running on PORT : ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(`MONGO DB Connection Failed !! ${err}`);
	});