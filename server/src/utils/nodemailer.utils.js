import { createTransport } from "nodemailer";
import { asycHandler } from "./asycHandler.util.js";

const sendEmail = asycHandler(async (emailsubject, emailBody) => {
	const transport = createTransport({
		service: "gmail",
		auth: {
			user: process.env.APP_EMAIL,
			pass: process.env.APP_PWD,
		},
	});

	var mailOptions = {
		from: process.env.APP_EMAIL,
		to: process.env.APP_EMAIL,
		subject: emailsubject,
		text: emailBody,
	};

	return sendEmail;
});

export { sendEmail };
