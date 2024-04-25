import mongoose from "mongoose";
import { ApiError } from "../utils/index.js";

let uri =
	"mongodb+srv://piyushraikwar289:piyush289@cluster0.5lpcsrr.mongodb.net/";

const connectDB = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${uri}/portfolio_db`);
		console.log(
			`MongoDB Connected | DB Host : ${connectionInstance.connection.host}`
		);
	} catch (error) {
		console.log(`MongoDB Connection Error, ${error}`);
		new ApiError(401, "Database Connection Falied", (error = error));
	}
};

export { connectDB };
