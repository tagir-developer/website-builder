const {body, check} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const ApiError = require('../exeptions/apiError')

exports.questionValidators = [
	check('email')
		// .custom(value => {
		// 	console.log('VALIDATORS CHECK EMAIL: ', value)
		// 	return true
		// })
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.not().isEmpty().withMessage('Поле с сообщением не должно быть пустым')
		.isString().withMessage('Сообщение не должно состоять из одних цифр'),
]

exports.complaintValidators = [
	check('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.not().isEmpty().withMessage('Поле с сообщением не должно быть пустым')
		.isString().withMessage('Сообщение не должно состоять из одних цифр'),
]
