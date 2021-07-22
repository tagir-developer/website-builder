const ApiError = require("../exeptions/apiError")
const userService = require("../service/userService")

class userController {

	async getUser(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {userId} = req.body
			const userData = await userService.getUserData(userId)

			return res.json({
				message: 'Данные пользователя актуализированы',
				...userData
			})

		} catch (e) {
			next(e)
		}
	}

	async changeEmail(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {userId, email} = req.body
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
			await userService.changeName(userId, name)

			return res.json({message: 'Имя пользователя успешно изменено'})

		} catch (e) {
			next(e)
		}
	}

	async changePassword(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const {userId, password} = req.body
			await userService.changePassword(userId, password)

			return res.json({message: 'Пароль пользователя успешно изменен'})

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new userController()