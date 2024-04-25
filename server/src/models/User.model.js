import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		fullname: {
			type: String,
			required: true,
			trim: true,
		},
		username: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			index: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
			index: true,
		},
		password: {
			type: String,
			required: true,
		},
		avatar: {
			type: String,
		},
		refreshToken: {
			type: String,
		},
	},
	{ timestamps: true }
);
