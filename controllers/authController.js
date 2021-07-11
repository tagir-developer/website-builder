const User = require("../models/User")
const { validationResult } = require("express-validator")
const userService = require("../service/userService")
const { json } = require("body-parser")
const ApiError = require("../exeptions/apiError")
const crypto = require('crypto')

class authController {

	async registration(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				// return next(ApiError.BadRequest(errors.array()[0].msg, 'danger', errors.array().map(i => i.param)))
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

			const { email, password, name } = req.body

			const userData = await userService.registration(email, password, name)
			res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

			return res.json({ userData, messageType: 'success', message: "Пользователь успешно создан" })

		} catch (e) {
			next(e)
		}
	}

	async login(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array()[0].msg, 'danger', errors.array()))
			}

			const { email, password } = req.body

			const userData = await userService.login(email, password)
			res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

			return res.json({ userData, messageType: 'success', message: "Пользователь вошел в систему" })

		} catch (e) {
			next(e)
		}
	}

	async logout(req, res, next) {
		try {
			const { refreshToken } = req.cookies
			const token = await userService.logout(refreshToken)
			res.clearCookie('refreshToken')
			return res.json(token)

		} catch (e) {
			next(e)
		}
	}

	async activate(req, res, next) {
		try {
			const activationLink = req.params.link
			await userService.activate(activationLink)
			return res.redirect(process.env.CLIENT_URL)

		} catch (e) {
			next(e)
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies

			const userData = await userService.refresh(refreshToken)
			res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })

			return res.json({ userData })

		} catch (e) {
			next(e)
		}
	}

	async reset(req, res, next) {
		try {

			const buffer = await crypto.randomBytes(32)

			if (!buffer) {
				return next(ApiError.BadRequest('Что-то пошло не так, повторите попытку позже', 'danger'))
			}

			const token = buffer.toString('hex')
			const { email } = req.body

			await userService.reset(email, token)

			return res.json({
				messageType: 'success',
				message: "Ссылка для сброса пароля отправлена на указанный email адрес",
				errors: []
			})


		} catch (e) {
			next(e)
		}
	}

	async password(req, res, next) {
		try {
			const resetData = await userService.password(req.params.token)
			res.json({resetData})
			// return res.redirect(`${process.env.CLIENT_URL}/password/${req.params.token}`)
		} catch (e) {
			next(e)
		}
	}

	async newPassword(req, res, next) {
		try {

			const {password, userId, token} = req.body

			await userService.newPassword(password, userId, token)

			return res.json({
				messageType: 'success',
				message: "Ваш пароль успешно изменен!",
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

	async users(req, res, next) {
		try {
			const users = await userService.getAllUsers()
			res.json(users)
		} catch (e) {
			next(e)
		}
	}

	async test(req, res, next) {
		try {
			// res.cookie('refreshToken', 'Установленный куки', { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
			// console.log('Cookies: ', res.cookies)
			return res.json('Сервер работает')


		} catch (e) {
			next(e)
		}
	}


}

module.exports = new authController()