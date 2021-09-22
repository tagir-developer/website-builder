const {check} = require('express-validator')

exports.questionValidators = [
	check('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.not().isEmpty().withMessage('Поле с сообщением не должно быть пустым')
		.isString().withMessage('Сообщение не должно состоять из одних цифр')
]

exports.complaintValidators = [
	check('email')
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('message')
		.not().isEmpty().withMessage('Поле с сообщением не должно быть пустым')
		.isString().withMessage('Сообщение не должно состоять из одних цифр')
]
