const BlockDto = require('../dtos/blockDto')
const ApiError = require('../exeptions/apiError')
const Block = require('../models/Block')

class BlockService {

	async createNewBlock(type, title, path, preview) {

		// const imagePath = path.join(__dirname, '..', 'images/avatars/thumb_150', fileName)

		const newBlock = await Block.create({
			type,
			title,
			path,
			preview
		})
		if (!newBlock) throw ApiError.BadRequest('Не удалось создать блок, повторите попытку позже', 'danger')

		return newBlock
	}

	async getWithType(type) {

		const blocks = await Block.find({type})
		if (!blocks) throw ApiError.BadRequest('Не удалось получить блоки, повторите попытку позже', 'danger')

		const blocksDto = blocks.map(i => new BlockDto(i))
		return blocksDto
	}

}

module.exports = new BlockService()