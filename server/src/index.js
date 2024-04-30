import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 3001;


connectDB()
	.then(() => {
		app.on("error", (error) => {
			console.log(`Error: ${error}`);
			throw error;
		});
		app.listen(PORT, () => {
			console.log(`⚙️ Server is running at PORT: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(`MONGO DB Connection Failed !! ${err}`);
	});
