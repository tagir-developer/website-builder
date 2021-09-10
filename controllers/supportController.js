const User = require("../models/User")
const { validationResult } = require("express-validator")
const userService = require("../service/userService")
const { json } = require("body-parser")
const ApiError = require("../exeptions/apiError")
const mailService = require("../service/mailService")

class supportController {

	async question(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { email, message } = req.body

			await mailService.sendFooterQuestionMail(email, message, req.files)

			return res.json({
				messageType: 'success',
				message: "Сообщение успешно отправлено в службу поддержки",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async complaint(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { email, message } = req.body

			await mailService.sendFooterComplaintMail(email, message)

			return res.json({
				messageType: 'success',
				message: "Жалоба успешно отправлена в службу поддержки",
				errors: []
			})


		} catch (e) {
			next(e)
		}
	}


}

module.exports = new supportController()