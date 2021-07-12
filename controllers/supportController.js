const User = require("../models/User")
const { validationResult } = require("express-validator")
const userService = require("../service/userService")
const { json } = require("body-parser")
const ApiError = require("../exeptions/apiError")

class supportController {

	async question(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

		console.log('ЗАГРУЖЕННЫЙ ФАЙЛ', req.body.file)

		} catch (e) {
			next(e)
		}
	}

	async complaint(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}



		} catch (e) {
			next(e)
		}
	}


}

module.exports = new supportController()