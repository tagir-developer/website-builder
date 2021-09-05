module.exports = class mergedPageDataDto {
	pageName
	additionalScripts
	projectFontConfigs
	pageBlocks

	constructor(projectModel, pageModel) {
		this.pageName = pageModel.name
		this.additionalScripts = projectModel.additionalScripts
		this.projectFontConfigs = projectModel.projectFontConfigs
		this.pageBlocks = pageModel.blocks.map(block => {
			return {
				blockPath: block.block.path,
				blockIsHidden: block.blockIsHidden,
				blockConfigs: block.blockConfigs,
				blockContent: block.blockContent
			}
		})

	}
}