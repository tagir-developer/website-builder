const {body, check} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const ApiError = require('../exeptions/apiError')

exports.questionValidators = [
	check('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.isString().withMessage('Сообщение не должно состоять из одних цифр'),
	// ! Здесь нужно еще проверить инпут с файлами (опциональный)
]

exports.complaintValidators = [
	check('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.isString().withMessage('Сообщение не должно состоять из одних цифр'),
]
