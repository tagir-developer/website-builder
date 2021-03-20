const {body} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const basicLoginErrorMessage = 'Вы ввели неверное имя пользователя или пароль'

exports.registerValidators = [
	// body('name', 'Имя не может состоять из одних цифр') Пока не знаю что делать, если параметр формы не обязательный
	body('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email')
		.custom(async (value, {req}) => {
		try {
			const user = await User.findOne({ email: value })
			return Promise.reject('Такой email уже занят')
		} catch(e) {
			console.log(e)
		}
		}).withMessage('Такой email уже занят'),
	body('password')
		.isLength({ min: 6 }).withMessage('Пароль должен быть минимум 6 символов'),
	body('confirmPassword')
		.custom((value, {req}) => {
		if (value !== req.body.password) {
			throw new Error('Пароли должны совпадать')
		}
		return true // уточнить когда используем true
		}).withMessage('Пароли должны совпадать'),
]

exports.loginValidators = [
	body('email')
		.exists().withMessage('Введите email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email')
		.custom(async (value, {req}) => {
			try {
				const user = await User.findOne({ email: value })
				if (!user) {
					return Promise.reject(basicLoginErrorMessage)
				}
			} catch(e) {
				console.log(e)
			}
		}).withMessage(basicLoginErrorMessage),
	body('password')
		.exists().withMessage('Введите пароль')
		.custom(async (value, {req}) => {
			try {
				const user = await User.findOne({ email: req.body.email })

				const isMatch = await bcrypt.compare(value, user.password)

				if (!isMatch) {
					return Promise.reject(basicLoginErrorMessage)
				}
			} catch(e) {
				console.log(e)
			}
		}).withMessage(basicLoginErrorMessage),
]