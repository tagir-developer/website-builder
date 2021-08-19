const {check} = require('express-validator')
const Page = require('../models/Page')

exports.createPageValidators = [
	check('name')
		.trim()
		.isLength({min: 3}).withMessage('Название страницы должно содержать не менее трех букв')
		.isLength({max: 60}).withMessage('Название страницы должно содержать не более 60 букв'),
	check('projectId')
		.trim()
		.isString().withMessage('Поле projectId должно быть строкой')
		.not().isEmpty().withMessage('Поле projectId не должен быть пустым'),
	check('link')
		.not().isEmpty().withMessage('Поле с адресом страницы не должно быть пустым')
		.trim().escape()
		.matches(/^[a-z0-9][a-z0-9\\-]+[a-z0-9]$/).withMessage('Имя проекта должно содержать только прописные английские буквы, цифры и тире')
		.custom(async (value, {req}) => { 
			try {
				const page = await Page.findOne({ project: req.body.projectId, link: value })
	
				if (page) {
					return Promise.reject('Такое имя страницы уже занято')
				}
				return true		
	
			} catch(e) {
				console.log(e)
			}
			}).withMessage('Такое имя страницы уже занято'),
		check('isHomePage')
			.isBoolean().withMessage('Поле должно иметь значение true или false'),
		check('openInNewWindow')
			.isBoolean().withMessage('Поле должно иметь значение true или false')
]

exports.updatePageValidators = [
	check('pageId')
		.trim()
		.isString().withMessage('pageId должен быть строкой')
		.not().isEmpty().withMessage('pageId не должен быть пустым полем'),
	check('name')
		.trim()
		.isLength({min: 3}).withMessage('Название страницы должно содержать не менее трех букв')
		.isLength({max: 60}).withMessage('Название страницы должно содержать не более 60 букв'), // ! Нужно еще добавить отсутствие посторонних символов в кастомном валидаторе
	check('link')
		.not().isEmpty().withMessage('Поле с адресом страницы не должно быть пустым')
		.trim().escape()
		.matches(/^[a-z0-9][a-z0-9\\-]+[a-z0-9]$/).withMessage('Имя проекта должно содержать только прописные английские буквы, цифры и тире'),
	check('openInNewWindow')
		.isBoolean().withMessage('Поле должно иметь значение true или false')
]

// exports.addBlockValidators = [
// 	check('blockId')
// 		.trim()
// 		.isString().withMessage('blockId должен быть строкой')
// 		.not().isEmpty().withMessage('blockId не должен быть пустым полем'),
// 	check('pageId')
// 		.trim()
// 		.isString().withMessage('pageId должен быть строкой')
// 		.not().isEmpty().withMessage('pageId не должен быть пустым полем')
// ]

