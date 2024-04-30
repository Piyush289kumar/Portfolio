import { ApiError, ApiResponse, asycHandler } from "../utils/index.js";
import { sendEmail } from "../utils/nodemailer.utils.js";

const contact = asycHandler(async (req, res) => {
	try {
		const { name, email, message } = req.body;
		const emailsubject = "Portfolio Query";
		const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

		const sendEmailRes = sendEmail(emailsubject, emailBody);

		if (!sendEmail) {
			return res
				.status(411)
				.json(new ApiResponse(411, false, "Email not send."));
		}
		return res
			.status(200)
			.json(new ApiResponse(200, true, "Email Send Successfully"));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while contact process."
		);
	}
});

export { contact };
