module.exports = class PageBlocksDto {
	blockId
	blockPath
	isNewBlock
	blockIsHidden
	blockConfigs
	blockContent

	constructor(model) {
		this.blockId = model.block._id
		this.blockPath = model.block.path
		this.isNewBlock = model.isNewBlock
		this.blockIsHidden = model.blockIsHidden
		this.blockConfigs = model.blockConfigs
		this.blockContent = model.blockContent
	}
}