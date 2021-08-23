const ApiError = require("../exeptions/apiError")
const blockService = require("../service/blockService")

class blockController {

	async createBlock(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {type, title, path, preview} = req.body

			const block = await blockService.createNewBlock(type, title, path, preview)

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
			const allowedTypes = ['header', 'form', 'gallery'] // ! Эти же типы мы проверяем в валидаторе, лучше хранить их в одном месте

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

			const pageBlocks = await blockService.addBlock(pageId, blockId)

			return res.json({
				blocks: pageBlocks,
				messageType: 'success',
				message: "Блок успешно добавлен",
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

}

module.exports = new blockController()