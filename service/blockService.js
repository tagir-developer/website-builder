const BlockDto = require('../dtos/blockDto')
const PageBlocksDto = require('../dtos/pageBlocksDto')
const PageBlocksRecoveryFromDto = require('../dtos/pageBlocksRecoveryFromDto')
const ApiError = require('../exeptions/apiError')
const Block = require('../models/Block')
const Page = require('../models/Page')
const fileSystemService = require('./fileSystemService')

class BlockService {

	async createNewBlock(type, title, path, preview, blockDefaultConfigs, blockDefaultContent) {

		const newBlock = await Block.create({
			type,
			title,
			path,
			preview,
			blockDefaultConfigs,
			blockDefaultContent
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
		const page = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		if (!page) throw ApiError.BadRequest('Страница для которой добавляется блок не найдена, попробуйте выполнить операцию позже', 'danger')

		const block = await Block.findById(blockId)
		if (!block) throw ApiError.BadRequest('Блок не найден, попробуйте выполнить операцию позже', 'danger')

		const newBlock = { 
			block: blockId,
			isNewBlock: true,
			blockIsHidden: false,
			blockConfigs: block.blockDefaultConfigs, 
			blockContent: block.blockDefaultContent
		}

		page.blocks.push(newBlock)
		await page.save()

		const updatedPage = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		const targetBlock = updatedPage.blocks.pop()

		await updatedPage.save()

		const blockDto = new PageBlocksDto(targetBlock)
		return blockDto
	}

	async copyBlock(pageId, originalBlockObj) {
		const page = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		if (!page) throw ApiError.BadRequest('Страница для которой копируется блок не найдена, попробуйте выполнить операцию позже', 'danger')

		const newBlock = new PageBlocksRecoveryFromDto(originalBlockObj, false)

		page.blocks.push(newBlock)
		await page.save()

		const updatedPage = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		const targetBlock = updatedPage.blocks.pop()

		await updatedPage.save()

		const blockDto = new PageBlocksDto(targetBlock)
		return blockDto
	}

	// async saveBlocks(pageId, blocks) {
	// 	const page = await Page.findById(pageId)
	// 	if (!page) throw ApiError.BadRequest('Страница с таким pageId не найдена, попробуйте выполнить операцию позже', 'danger')

	// 	const recoveryBlocks = blocks.map(i => new PageBlocksRecoveryFromDto(i))

	// 	page.blocks = recoveryBlocks
	// 	await page.save()

	// }

	async saveBlocks(pageId, blocks, files) {

		const blocksWithFileLinks = fileSystemService.includeFileLinksInBlocks(blocks, files)

		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Страница с таким pageId не найдена, попробуйте выполнить операцию позже', 'danger')

		const recoveryBlocks = blocksWithFileLinks.map(i => new PageBlocksRecoveryFromDto(i))

		page.blocks = recoveryBlocks
		await page.save()
	}

	async sendNamePhone(projectId, formName, name, phone) {

		// const blocksWithFileLinks = fileSystemService.includeFileLinksInBlocks(blocks, files)

		// const page = await Page.findById(pageId)
		// if (!page) throw ApiError.BadRequest('Страница с таким pageId не найдена, попробуйте выполнить операцию позже', 'danger')

		// const recoveryBlocks = blocksWithFileLinks.map(i => new PageBlocksRecoveryFromDto(i))

		// page.blocks = recoveryBlocks
		// await page.save()
	}

}

module.exports = new BlockService()