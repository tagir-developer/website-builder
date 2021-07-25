const ApiError = require("../exeptions/apiError")
const userService = require("../service/userService")
const gm = require('gm')
const path = require('path')

class userController {

	async getUser(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { userId } = req.body
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

			const { userId, email } = req.body
			await userService.changeEmail(userId, email)

			return res.json({ message: 'Email пользователя успешно изменен' })

		} catch (e) {
			next(e)
		}
	}

	async changeName(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const { userId, name } = req.body
			await userService.changeName(userId, name)

			return res.json({ message: 'Имя пользователя успешно изменено' })

		} catch (e) {
			next(e)
		}
	}

	async changePassword(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const { userId, password } = req.body
			await userService.changePassword(userId, password)

			return res.json({ message: 'Пароль пользователя успешно изменен' })

		} catch (e) {
			next(e)
		}
	}

	async uploadAvatar(req, res, next) {
		try {

			console.log('ПРАВИЛЬНО ЛИ ПЕРЕДАЕМ ДАННЫЕ ID', req.body.id)
			console.log('ПРАВИЛЬНО ЛИ ПЕРЕДАЕМ ДАННЫЕ ФАЙЛ', req.file)

			const userData = await userService.uploadAvatar(req.body.id, req.file)

			return res.json({ ...userData, message: "Аватар успешно изменен" })

		} catch (e) {
			next(e)
		}
	}

	async testFunc(req, res, next) {
		try {

			// gm('../images/avatars/2021-07-24T18-20-32.527Z-Backgrounds_Black_cubic_background_094966_.jpg')
			// .resize(150, 150, '^')
			// .gravity('Center')
			// .extent(150, 150)
			// .noProfile()
			// .write("../images/avatars/thumb_150/new.jpg", function(err) {
			// 	if (err) {
			// 		console.log('Ошибка при загрузке аватар', err)
			// 		throw ApiError.BadRequest('При загрузке файла произошла ошибка. Попробуйте еще раз.', 'danger')
			// 	}
			// })

			// gm("../images/testimg.jpg").identify(function (err, value) {
			// 	console.log('ДАННЫЕ ИЗОБРАЖЕНИЯ', value)

			// 	if (err) {
			// 		console.log("ОШИБКА", err)
			// 	}
			// });

			console.log('PAAAAAAAAAAAAAATH', path.join(__dirname, 'images'))
			console.log('PAAAAAAAAAAAAAATH', path.join(__filename))


			// gm("testimg.jpg")
			// 	.resize(150, 150, '^')
			// 	.gravity('Center')
			// 	.extent(150, 150)
			// 	.noProfile()
			// 	.write('../images/wwewew.jpg', function (err) {
			// 		if (err) {
			// 			console.log('Ошибка при загрузке аватар', err)
			// 			return next(ApiError.BadRequest('При загрузке файла произошла ошибка. Попробуйте еще раз.', 'danger'))
			// 		}

			// 		return res.json({ message: "Аватар успешно изменен" })
			// 	})

			// return res.json({ message: "Аватар успешно изменен" })

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new userController()