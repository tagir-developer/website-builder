const TemplateDto = require('../dtos/templateDto')
const ApiError = require('../exeptions/apiError')
const Template = require('../models/Template')
// const path = require('path')

class TemplateService {

	async createNewTemplate(type, title, description, image, preview) {

		// const imagePath = path.join(__dirname, '..', 'images/avatars/thumb_150', fileName)
		// const previewPath = path.join(__dirname, '..', 'images/avatars/thumb_150', fileName)

		const newTemplate = await Template.create({
			type,
			title,
			description,
			image,
			preview
		})
		if (!newTemplate) throw ApiError.BadRequest('Не удалось создать шаблон, повторите попытку позже', 'danger')

		return newTemplate
	}

	async getAll() {

		const templates = await Template.find()
		if (!templates) throw ApiError.BadRequest('Не удалось получить шаблоны, повторите попытку позже', 'danger')

		const templatesDto = templates.map(i => new TemplateDto(i))
		return templatesDto
	}

	async getWithType(type) {

		const templates = await Template.find({type})
		if (!templates) throw ApiError.BadRequest('Не удалось получить шаблоны, повторите попытку позже', 'danger')

		const templatesDto = templates.map(i => new TemplateDto(i))
		return templatesDto
	}

}

module.exports = new TemplateService()