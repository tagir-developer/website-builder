const {check} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')

exports.getUserValidators = [
	check('userId') 
		.isString().withMessage('ID пользователя должен быть строкой')
]

exports.changeEmailValidators = [
	check('email') // ! На клиенте необходимо проверить и не запускать экшн, если email не изменился
		.isEmail().normalizeEmail().withMessage('Введите корректный email')
		.custom(async (value, {req}) => {
		try {
			const user = await User.findOne({ email: value })

			if (user) {
				return Promise.reject('Такой email уже занят')
			}
			return true		

		} catch(e) {
			console.log(e)
		}
		}).withMessage('Этот email уже занят')

]

exports.changePasswordValidators = [
	check('password')
		.isString().withMessage('Пароль должен быть строкой')
		.trim()
		.isLength({ min: 6 }).withMessage('Пароль должен быть минимум 6 символов')
		.not().matches(/\s/).withMessage('Пароль не должен содержать пробелы')
		.matches(/\d/).withMessage('Пароль должен содержать хотя бы одну цифру')
]

