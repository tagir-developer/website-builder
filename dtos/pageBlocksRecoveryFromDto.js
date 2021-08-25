module.exports = class PageBlocksRecoveryFromDto {
	_id
	block
	isNewBlock
	blockIsHidden
	blockConfigs
	blockContent

	constructor(dto, withId = true) {
		if (withId) this._id = dto.blockId
		this.block = dto._blockModelId
		this.isNewBlock = dto.isNewBlock
		this.blockIsHidden = dto.blockIsHidden
		this.blockConfigs = dto.blockConfigs
		this.blockContent = dto.blockContent
	}
}