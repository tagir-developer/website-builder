const BlockDto = require('../dtos/blockDto')
const PageBlocksDto = require('../dtos/pageBlocksDto')
const ApiError = require('../exeptions/apiError')
const Block = require('../models/Block')
const Page = require('../models/Page')

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

	async getPageBlocks(pageId) {

		const page = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		if (!page) throw ApiError.BadRequest('Не удалось найти страницу по заданному ID, повторите попытку позже', 'danger')

		const blocks = page.blocks
		const blocksDto = blocks.map(i => new PageBlocksDto(i))
		return blocksDto
	}

	async addBlock(pageId, blockId) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Страница для которой добавляется блок не найдена, попробуйте выполнить операцию позже', 'danger')

		const newBlock = { 
			block: blockId,
			isNewBlock: true,
			blockIsHidden: false,
			blockConfigs: {},
			blockContent: {}
		}

		page.blocks.push(newBlock)
		await page.save()

		const pageBlocks = this.getPageBlocks(pageId)
		return pageBlocks
	}

}

module.exports = new BlockService()