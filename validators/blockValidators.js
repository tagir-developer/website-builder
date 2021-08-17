const {check} = require('express-validator')

exports.createBlockValidators = [
	check('title')
		.trim()
		.not().isEmpty().withMessage('Поле title не должно быть пустым')
		.isString().withMessage('Название блока должно быть строкой')
		.isLength({min: 10, max: 100}).withMessage('Название блока должно содержать от 10 до 100 символов'),
	check('type')
		.trim()
		.not().isEmpty().withMessage('Поле type не должно быть пустым')
		.isString().withMessage('Передаваемое значение type должно быть строкой')
		.isIn(['header', 'form', 'gallery']).withMessage(`Такого типа блока нет в списке допустимых значений`),
	check('path')
		.trim()
		.not().isEmpty().withMessage('Поле path не должно быть пустым')
		.isString().withMessage('Передаваемое значение path должно быть строкой'),
	check('preview')
		.trim()
		.not().isEmpty().withMessage('Поле preview не должно быть пустым')
		.isString().withMessage('Передаваемое значение preview должно быть строкой')
]

