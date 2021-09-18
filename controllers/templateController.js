const ApiError = require("../exeptions/apiError")
const templateService = require("../service/templateService")

class templateController {

	async createTemplate(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {type, title, description, image, preview} = req.body

			const template = await templateService.createNewTemplate(type, title, description, image, preview)

			return res.json({
				template,
				messageType: 'success',
				message: "Шаблон успешно создан",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async addBlocks(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {templateId, blocks} = req.body

			await templateService.addBlocks(templateId, blocks)

			return res.json({
				// template,
				messageType: 'success',
				message: "Блоки добавлены к шаблону",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async getAllTemplates(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const templates = await templateService.getAll()

			return res.json(templates)

			// return res.json({
			// 	templates,
			// 	messageType: 'success',
			// 	message: "Шаблон успешно получены",
			// 	errors: []
			// })

		} catch (e) {
			next(e)
		}
	}

	async getWithType(req, res, next) {
		try {

			const templateType = req.params.type
			const allowedTypes = ['business', 'business-card', 'another']

			if (!allowedTypes.includes(templateType)) {
				next(ApiError.BadRequest(`Передаваемое значение type должно иметь значение 'business', 'business-card' или 'another'`, 'danger'))
			}

			const templates = await templateService.getWithType(templateType)

			return res.json(templates)

		} catch (e) {
			next(e)
		}
	}

}

module.exports = new templateController()