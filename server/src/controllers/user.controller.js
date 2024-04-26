import Jwt from "jsonwebtoken";
import { asycHandler } from "../utils";
import { ApiError } from "../utils";
import { ApiResponse } from "../utils";
import mongoose from "mongoose";
import { User } from "../models/User.model";
const cookieOption = {
	httpOnly: true,
	secure: true,
};

const signup = asycHandler(async (req, res) => {
	const { fullname, username, email, password } = req.body;
	if (
		[fullname, username, email, password].some(
			(field) => field?.trim() === ""
		)
	) {
		throw new ApiError(400, "All Field is required");
	}

	const userExited = await User.findOne({ $or: [{ email }] });

	if (userExited) {
		throw new ApiError(409, "User with Email is already Exited");
	}

	const userCreateQuery = await User.create({
		username,
		fullname,
		email,
		password,
	});

	const userCreateQueryRes = await User.findById(userCreateQuery._id).select(
		"-password -refreshToken"
	);
	if (userCreateQueryRes) {
		throw new ApiError(500, "Something went wrong Sign Up Process");
	}
	return res
		.status(201)
		.json(
			new ApiResponse(
				201,
				userCreateQueryRes,
				"User Created Successfully"
			)
		);
});

export { signup };
