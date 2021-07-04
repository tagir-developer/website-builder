module.exports = class ApiError extends Error {
	status
	errors
	messageType

	constructor(status, message, messageType = 'danger', errors = []) {
		super(message)
		this.status = status
		this.errors = errors
		this.messageType = messageType
	}

	static UnauthorizedError() {
		return new ApiError(401, 'Пользователь не авторизован')
	}

	static BadRequest(message, messageType = 'danger', errors = []) {
		return new ApiError(400, message, messageType, errors)
	}
}