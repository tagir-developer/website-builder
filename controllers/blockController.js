const ApiError = require("../exeptions/apiError")
const blockService = require("../service/blockService")
const path = require('path')

class blockController {

	async createBlock(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {type, title, path, preview, blockDefaultConfigs, blockDefaultContent} = req.body

			const block = await blockService.createNewBlock(type, title, path, preview, blockDefaultConfigs, blockDefaultContent)

			return res.json({
				block,
				messageType: 'success',
				message: "Блок успешно создан",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async getWithType(req, res, next) {
		try {

			const blockType = req.params.type
			const allowedTypes = ['header', 'form', 'gallery', 'menu', 'content'] // ! Эти же типы мы проверяем в валидаторе, лучше хранить их в одном месте

			if (!allowedTypes.includes(blockType)) {
				next(ApiError.BadRequest('Передаваемое значение type не входит в список допустимых значений'))
			}

			const blocks = await blockService.getWithType(blockType)

			return res.json(blocks)

		} catch (e) {
			next(e)
		}
	}

	async getPageBlocks(req, res, next) {
		try {

			const pageId = req.params.pageId

			const blocks = await blockService.getPageBlocks(pageId)

			return res.json(blocks)

		} catch (e) {
			next(e)
		}
	}

	async addBlock(req, res, next) { 
		try {
			ApiError.ValidationErrorChecking(req)

			const {pageId, blockId} = req.body
		
			const block = await blockService.addBlock(pageId, blockId)

			return res.json({
				block,
				messageType: 'success',
				message: "Блок успешно добавлен",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async copyBlock(req, res, next) { 
		try {
			ApiError.ValidationErrorChecking(req)

			const {pageId, originalBlock} = req.body

			const originalBlockObj = JSON.parse(originalBlock)
		
			const block = await blockService.copyBlock(pageId, originalBlockObj)

			return res.json({
				block,
				messageType: 'success',
				message: "Блок успешно скопирован",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	// async saveBlocks(req, res, next) { 
	// 	try {
	// 		ApiError.ValidationErrorChecking(req)

	// 		const {pageId, dtoBlocks} = req.body
	// 		const blocks = JSON.parse(dtoBlocks)

	// 		await blockService.saveBlocks(pageId, blocks)

	// 		return res.json({
	// 			messageType: 'success',
	// 			message: "Изменения успешно сохранены",
	// 			errors: []
	// 		})
	// 	} catch (e) {
	// 		next(e)
	// 	}
	// }

	async saveBlocks(req, res, next) { 
		try {
			// ApiError.ValidationErrorChecking(req)

			const {pageId, blocks, templateId} = req.body
			const files = req.files

			const updatedProjectAndMessage = await blockService.saveBlocks(pageId, blocks, files, templateId)

			return res.json({
				project: updatedProjectAndMessage.updatedProject,
				messageType: 'success',
				message: updatedProjectAndMessage.message,
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

	async sendNamePhone(req, res, next) { 
		try {
			ApiError.ValidationErrorChecking(req)

			const {projectId, formName, name, phone} = req.body

			await blockService.sendNamePhone(projectId, formName, name, phone)

			return res.json({
				messageType: 'success',
				message: "Ваши данные успешно отправлены. Скоро с вами свяжутся наши менеджеры.",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	// async test(req, res, next) { 
	// 	try {
	// 		// ApiError.ValidationErrorChecking(req)

	// 		// const {projectId, formName, name, phone} = req.body

	// 		// await blockService.sendNamePhone(projectId, formName, name, phone)

	// 		console.log('ДОШЛИ ДО СЕРВЕРА!')

	// 		return res.json({
	// 			messageType: 'success',
	// 			message: "Тест для SSR пройден",
	// 			errors: []
	// 		})

	// 	} catch (e) {
	// 		next(e)
	// 	}
	// }

}

module.exports = new blockController()