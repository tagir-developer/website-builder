const {check} = require('express-validator')

exports.createTemplateValidators = [
	check('type')
		.isString().withMessage('Передаваемое значение type должно быть строкой')
		.isIn(['business', 'business-card', 'another']).withMessage(`Передаваемое значение type должно иметь значение 'business', 'business-card' или 'another'`),
	check('title')
		.trim()
		.not().isEmpty().withMessage('Поле title не должно быть пустым')
		.isString().withMessage('Передаваемое значение title должно быть строкой'),
	check('description')
		.trim()
		.not().isEmpty().withMessage('Поле description не должно быть пустым')
		.isString().withMessage('Передаваемое значение description должно быть строкой'),
	check('image')
		.trim()
		.not().isEmpty().withMessage('Поле image не должно быть пустым')
		.isString().withMessage('Передаваемое значение letterSubject должно быть строкой'),
	check('preview')
		.trim()
		.not().isEmpty().withMessage('Поле preview не должно быть пустым')
		.isString().withMessage('Передаваемое значение preview должно быть строкой')
]

exports.addBlockListValidators = [
	check('templateId')
	.not().isEmpty().withMessage('Поле templateId не должно быть пустым')
		.isString().withMessage('Передаваемое значение templateId должно быть строкой'),
	check('blocks')
		.not().isEmpty().withMessage('Поле blocks не должно быть пустым')
		.isString().withMessage('Передаваемое значение blocks должно быть строкой')
]

