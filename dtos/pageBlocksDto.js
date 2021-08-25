module.exports = class PageBlocksDto {
	blockId
	blockPath
	isNewBlock
	blockIsHidden
	blockConfigs
	blockContent
	_blockModelId

	constructor(model) {
		this.blockId = model._id
		this.blockPath = model.block.path
		this.isNewBlock = model.isNewBlock
		this.blockIsHidden = model.blockIsHidden
		this.blockConfigs = model.blockConfigs
		this.blockContent = model.blockContent
		this._blockModelId = model.block._id
	}
}