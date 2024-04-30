import jwt from "jsonwebtoken";
import { ApiError, ApiResponse, asycHandler } from "../utils";
const checkUser = asycHandler(async (req, res, next) => {
	try {
		const { refreshToken } =
			req.cookies?.refreshToken || req.body?.refreshToken;
		if (!refreshToken) {
			return res
				.status(401)
				.json(new ApiResponse(401, false, "Please Login First"));
		}
		const verifyRefreshToken = jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET
		);
		if (!verifyRefreshToken) {
			throw new ApiError(401, false, "Unable to Verify Refresh Token");
		}
		res.clearCookie("refreshToken");
		const newRefreshToken = jwt.sign(
			{ id: user.id },
			process.env.REFRESH_TOKEN_SECRET
		);
		res.cookies("refreshToken", newRefreshToken, {
			path: "/",
			httpOnly: true,
			expiresIn: new Date(Date.now() + 1000 * 30),
			sameSite: "lax",
		});
		return res
			.status(200)
			.json(new ApiResponse(200, true, user, "User is logged in"));
	} catch (error) {
		throw new ApiError(
			500,
			false,
			"Something went wrong while checking user"
		);
	}
});
