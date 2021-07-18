const {check} = require('express-validator')
const Project = require('../models/Project')

exports.createProjectValidators = [
	check('name')
		.optional()
		.isLength({min: 3}).withMessage('Название сайта должно содержать не менее трех букв')
		.isLength({max: 60}).withMessage('Название сайта должно содержать не более 60 букв'), // ! Нужно еще добавить отсутствие посторонних символов в кастомном валидаторе
	check('link')
		.not().isEmpty().withMessage('Поле с именем проекта не должно быть пустым')
		.trim().escape()
		.matches(/^[a-z0-9][a-z0-9\\-]+[a-z0-9]$/).withMessage('Имя проекта должно содержать только прописные английские буквы, цифры и тире')
		.custom(async (value, {req}) => {
			try {
				const trimedValue = value.trim()
				const project = await Project.findOne({ link: trimedValue })
	
				if (project) {
					return Promise.reject('Такое имя проекта уже занято')
				}
				return true		
	
			} catch(e) {
				console.log(e)
			}
			}).withMessage('Такое имя проекта уже занято')
]

