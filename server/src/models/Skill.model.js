import mongoose, { Schema, model } from "mongoose";

const skillSchema = new Schema(
	{
		skillName: {
			type: String,
			required: true,
		},
		skillLevel: {
			type: Number,
		},
	},
	{ timestamps: true }
);

export const Skill = model("Skill", skillSchema);
