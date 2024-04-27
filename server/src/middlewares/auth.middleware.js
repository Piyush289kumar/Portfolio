import { User } from "../models/User.model.js";
import { ApiError, ApiResponse, asycHandler } from "../utils/index.js";
import jwt from "jsonwebtoken";

export const verifyJWT = asycHandler(async (req, _, next) => {
	try {
		const token =
			req.cookies?.accessToken ||
			req.header("Authorization")?.replace("Bearer ", "");

		if (!token) {
			throw new ApiError(401, "Unauthorized Request");
		}

		const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

		const user = await User.findById(decodedToken?._id).select("-password");

		if (!user) {
			throw new ApiError(401, "Invalid Access Token");
		}

		req.user = user;
		next();
	} catch (error) {
		throw new ApiError(401, error || "Invalid Access Token");
	}
});
