// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const User = require("../models/User")
const { validationResult } = require("express-validator")
const userService = require("../service/userService")
const { json } = require("body-parser")

class authController {

	async registration (req, res, next) {
		try {
			const errors = validationResult(req)
			if(!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					messageType: 'danger',
					message: errors.array()[0].msg
				})
			}
	
			const {email, password, name} = req.body

			const userData = await userService.registration(email, password, name)
			res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, secure: true})
			return res.json(userData)
	
			// const hashedPassword = await bcrypt.hash(password, 12)

			// const user = await User.create({email, password: hashedPassword, name})
	
	
			// return res.status(201).json({ 
			// 	messageType: 'success',
			// 	message: "Пользователь успешно создан" 
			// })
	
		} catch (e) {
			return res.status(500).json({
				messageType: 'danger',
				// message: "Что-то пошло не так, поробуйте снова"
				message: e.message
			})
			
		}
	}

	async login (req, res, next) {
		try {	
			const errors = validationResult(req)
			if(!errors.isEmpty()) {
				res.status(400).json({
					errors: errors.array(),
					message: "Некорректные данные при регистрации"
				})
			}

			// const {email, password} = req.body
	
			// const user = await User.findOne({ email })
	
			// const token = jwt.sign(
			// 	{ userId: user.id },
			// 	config.get('jwtSecret'),
			// 	{expiresIn: '1h'}
			// )
	
			// return res.json({ token, userId: user.id })
	
		} catch (e) {
			res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
		}
	}

	async logout (req, res, next) {
		try {
		

		} catch (e) {
			res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
		}
	}

	async activate (req, res, next) {
		try {
		

		} catch (e) {
			res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
		}
	}

	async refresh (req, res, next) {
		try {
		

		} catch (e) {
			res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
		}
	}

	async test (req, res, next) {
		try {
		return res.json('Сервер работает')

		} catch (e) {
			res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
		}
	}


}

module.exports = new authController()