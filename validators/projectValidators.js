const {check} = require('express-validator')
const Project = require('../models/Project')

exports.createProjectValidators = [
	check('name')
		.trim()
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

exports.addScriptsValidators = [
	check('scripts')
		.trim()
		.isString().withMessage('Поле с подключаемыми скриптами должно быть строкой')
		.matches(/(^<script(.*\n)*.+script>$)|(^\s*$)/gm).withMessage('Поле с подключаемыми скриптами должно содержать теги <script... и </script> или быть пустым')
]

exports.changeStatusValidators = [
	check('projectId')
		.trim()
		.isString().withMessage('Поле projectId должно быть строкой'),
	check('propsArr')
		.trim()
		.isString().withMessage('Поле propsArr должно быть строкой')
]

exports.setFontConfigsValidators = [
	check('projectId')
		.isString().withMessage('Передаваемое значение projectId должно быть строкой'),
	check('fontFamily')
		.trim()
		.isString().withMessage('Передаваемое значение fontFamily должно быть строкой'),
				// ? Возможно, нужно проверять шрифт, есть ли такой в списке разрешенных
	check('titleSize')
		.trim()
		.isString().withMessage('Передаваемое значение titleSize должно быть строкой'),
	check('titleWeight')
		.trim()
		.isString().withMessage('Передаваемое значение titleWeight должно быть строкой'),
	check('textSize')
		.trim()
		.isString().withMessage('Передаваемое значение textSize должно быть строкой')
]

exports.formProcessingValidators = [
	check('projectId')
		.isString().withMessage('Передаваемое значение projectId должно быть строкой'),
	check('email')
		.trim()
		.isEmail().normalizeEmail().withMessage('Введите корректный email'),
	check('secondaryEmail')
		.trim()
		.optional({checkFalsy: true})
		.isEmail().normalizeEmail().withMessage('Введите корректный дополнительный email, либо оставьте это поле пустым'),
	check('letterSubject')
		.trim()
		.not().isEmpty().withMessage('Поле с темой письма не должно быть пустым')
		.isString().withMessage('Передаваемое значение letterSubject должно быть строкой'),
	check('phoneNumber')
		.trim()
		.optional({checkFalsy: true})
		.customSanitizer(value => {
			const normalizedPhone = value.replace(/[\s-()+]/g, '').replace(/^8/g, '7')
			return normalizedPhone
		})
		.isMobilePhone('ru-RU').withMessage('Введите корректный номер телефона, либо оставьте это поле пустым')
]

exports.generateWebsiteValidators = [
	check('projectId')
		.trim()
		.isString().withMessage('Поле projectId должно быть строкой')
]

exports.getPageDataValidators = [
	check('projectId')
		.trim()
		.isString().withMessage('Поле projectId должно быть строкой')
		.not().isEmpty().withMessage('projectId не должен быть пустым полем'),
	check('pageId')
		.trim()
		.isString().withMessage('Поле projectId должно быть строкой')
		.not().isEmpty().withMessage('projectId не должен быть пустым полем')
]