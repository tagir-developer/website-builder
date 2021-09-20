module.exports = class RemoveBlockIdDto {
	block
	isNewBlock
	blockIsHidden
	blockConfigs
	blockContent

	constructor(block) {
		this.block = block.block
		this.isNewBlock = block.isNewBlock
		this.blockIsHidden = block.blockIsHidden
		this.blockConfigs = block.blockConfigs
		this.blockContent = block.blockContent
	}
}