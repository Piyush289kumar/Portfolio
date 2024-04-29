import Jwt from "jsonwebtoken";
import { asycHandler } from "../utils/index.js";
import { ApiError } from "../utils/index.js";
import { ApiResponse } from "../utils/index.js";
import mongoose from "mongoose";
import { User } from "../models/User.model.js";
const cookieOption = {
	httpOnly: true,
	secure: true,
};
const generateAccessAndRefreshToken = async (userId) => {
	try {
		const fetchUserData = User.findById(userId);
		const accessToken = fetchUserData.generateAccessToken();
		const refreshToken = fetchUserData.generateRefreshToken();
		fetchUserData.refreshToken = refreshToken;
		await fetchUserData.save({ validateBeforeSave: false });
		return { accessToken, refreshToken };
	} catch (error) {
		throw new ApiError(
			false,
			500,
			false,
			"Something went wrong while generating access and refresh token"
		);
	}
};
const signup = asycHandler(async (req, res) => {
	const { fullname, username, email, password } = req.body;
	if (
		[fullname, username, email, password].some(
			(field) => field?.trim() === ""
		)
	) {
		throw new ApiError(400, false, "All Field is required");
	}
	const userExited = await User.findOne({ $or: [{ email }] });
	if (userExited) {
		throw new ApiError(409, false, "User with Email is already Exited");
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
		throw new ApiError(500, false, "Something went wrong Sign Up Process");
	}
	return res
		.status(201)
		.json(
			new ApiResponse(
				201,
				true,
				userCreateQueryRes,
				"User Created Successfully"
			)
		);
});
const signin = asycHandler(async (req, res) => {
	try {
		const { email, username, password } = req.body;
		if (!email && !username && !password) {
			throw new ApiError(400, false, "Email or Username is Required");
		}
		const user = await User.findOne({ $or: [{ email }, { username }] });
		if (!user) {
			throw new ApiError(404, false, "Account Not Found...!");
		}
		const isPasswordCorrect = await user.isPasswordCorrect(password);
		if (!isPasswordCorrect) {
			throw new ApiError(401, false, "Invalid User Credentials");
		}
		const { accessToken, refreshToken } = generateAccessAndRefreshToken(
			user._id
		);
		const loggedUser = await User.findById(user._id).select(
			"-password",
			"-refreshToken"
		);
		return res
			.status(200)
			.cookie("accessToken", accessToken, cookieOption)
			.cookie("refreshToken", refreshToken, cookieOption)
			.json(
				new ApiResponse(
					200,
					true,
					{ user: loggedUser, accessToken, refreshToken },
					"User Logged in Successfully"
				)
			);
	} catch (error) {
		throw new ApiError(500, false, "Something wrong while login account.");
	}
});
const logout = asycHandler(async (req, res) => {
	try {
		await User.findByIdAndUpdate(
			req.user._id,
			{
				$unset: {
					refreshToken: "1",
				},
			},
			{ new: true }
		);
		return res
			.status(200)
			.clearCookie("accessToken", cookieOption)
			.clearCookie("refreshToken", refreshToken)
			.json(new ApiResponse(200, true, {}, "User Logged Out"));
	} catch (error) {
		throw new ApiError(500, false, "Something wrong while logout account");
	}
});
const getUserDetail = asycHandler(async (_, res) => {
	try {
		const user = await User.findOne().select(
			"-password -email -refreshToken"
		);
		if (!user) {
			throw new ApiError(404, false, "User not found..");
		}
		return res
			.status(200)
			.json(new ApiResponse(200, true, user, "User Data Fetch"));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while Fetch user data"
		);
	}
});
const getAdminUser = asycHandler(async (req, res) => {
	try {
	} catch (error) {
		new ApiError(
			500,
			false,
			"Something went wrong while Fetch admin user data"
		);
	}
});
export { signup, signin, logout };
