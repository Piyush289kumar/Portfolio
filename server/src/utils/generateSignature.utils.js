import cloudinary from "cloudinary";
import { asycHandler } from "./index.js";

cloudinary.v2.config({
	cloud_name: "des1uatms",
	api_key: "612657266681866",
	api_secret: "fFghsUAriDMyu70u3S94klLgsqM",
});

const generateSignature = asycHandler(async (req, res) => {
	const { publicId } = req.query;
	const signature = await cloudinary.v2.utils.api_sign_request(
		{
			public_id: publicId,
			timestamp: Math.floor(new Date().getTime() + 31536000000 / 1000),
		},
		"fFghsUAriDMyu70u3S94klLgsqM"
	);

	return res.status(200).json({ signature });
});

export { generateSignature };
