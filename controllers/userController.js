const User = require("../models/User")
const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const userService = require("../service/userService")

class userController {

	async changeEmail(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {userId, email} = req.body
			console.log('DATA - changeEmail', userId, email)
			await userService.changeEmail(userId, email)

			return res.json({message: 'Email пользователя успешно изменен'})

		} catch (e) {
			next(e)
		}
	}

	async changeName(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const {userId, name} = req.body
			console.log('DATA - changeName', userId, name)
			await userService.changeName(userId, name)

			return res.json({message: 'Имя пользователя успешно изменено'})

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new userController()