import { ApiError, asycHandler } from "../utils/index.js";

const contact = asycHandler(async (req, res) => {
	try {
		const { name, email, message } = req.body;
		const userMsg = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while contact process."
		);
	}
});

export { contact };
