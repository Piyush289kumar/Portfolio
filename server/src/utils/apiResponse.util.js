class ApiResponse {
	constructor(statusCode, success, data, message = "Success") {
		(this.statusCode = statusCode),
			(this.success = success),
			(this.data = data),
			(this.message = message),
			(this.success = statusCode < 400);
	}
}

export { ApiResponse };
