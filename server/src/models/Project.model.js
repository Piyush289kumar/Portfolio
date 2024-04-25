import mongoose, { Schema, model } from "mongoose";

const projectSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		githubLink: {
			type: String,
		},
		hostedUrl: {
			type: String,
		},
		deleteToken: {
			type: String,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{ timestamps: true }
);

export const Project = model("Project", projectSchema);
