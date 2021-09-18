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
		.isIn(['header', 'form', 'gallery', 'menu', 'content']).withMessage(`Такого типа блока нет в списке допустимых значений`),
	check('path')
		.trim()
		.not().isEmpty().withMessage('Поле path не должно быть пустым')
		.isString().withMessage('Передаваемое значение path должно быть строкой'),
	check('preview')
		.trim()
		.not().isEmpty().withMessage('Поле preview не должно быть пустым')
		.isString().withMessage('Передаваемое значение preview должно быть строкой'),
	check('blockDefaultConfigs')
		.not().isEmpty().withMessage('Поле blockDefaultConfigs не должно быть пустым'),
	check('blockDefaultContent')
		.not().isEmpty().withMessage('Поле blockDefaultContent не должно быть пустым')
]

exports.addBlockValidators = [
	check('blockId')
		.trim()
		.isString().withMessage('blockId должен быть строкой')
		.not().isEmpty().withMessage('blockId не должен быть пустым полем'),
	check('pageId')
		.trim()
		.isString().withMessage('pageId должен быть строкой')
		.not().isEmpty().withMessage('pageId не должен быть пустым полем')
]

exports.copyBlockValidators = [
	check('originalBlock')
		.trim()
		.isString().withMessage('originalBlock должен быть строкой')
		.not().isEmpty().withMessage('originalBlock не должен быть пустым полем'),
	check('pageId')
		.trim()
		.isString().withMessage('pageId должен быть строкой')
		.not().isEmpty().withMessage('pageId не должен быть пустым полем')
]

exports.saveBlocksValidators = [
	check('dtoBlocks')
		.trim()
		.isString().withMessage('dtoBlocks должен быть строкой')
		.not().isEmpty().withMessage('blocks не должен быть пустым полем'),
	check('pageId')
		.trim()
		.isString().withMessage('pageId должен быть строкой')
		.not().isEmpty().withMessage('pageId не должен быть пустым полем')
]

exports.sendNamePhoneValidators = [
	check('projectId')
		.trim()
		.not().isEmpty().withMessage('projectId не должен быть пустым полем')
		.isString().withMessage('projectId должен быть строкой'),
	check('formName')
		.trim()
		.not().isEmpty().withMessage('formName не должен быть пустым полем')
		.isString().withMessage('formName должен быть строкой'),
	check('name')
		.trim()
		.not().isEmpty().withMessage('name не должен быть пустым полем')
		.isString().withMessage('name должен быть строкой'),
	check('phone')
		.trim()
		.not().isEmpty().withMessage('phone не должен быть пустым полем')
		.isString().withMessage('phone должен быть строкой')

]