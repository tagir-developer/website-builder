module.exports = class pageDataBlocksDto {
	blocks

	constructor(page) {
		this.blocks = page.blocks.map(block => {
			return {
				blockPath: block.block.path,
				blockIsHidden: block.blockIsHidden,
				blockConfigs: block.blockConfigs,
				blockContent: block.blockContent
			}
		})
	}
}