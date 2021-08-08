module.exports = class ProjectsListDto {
	id
	name
	link
	isPublished
	hasPages
	updated
	scripts
	fontConfigs
	formProcessing

	constructor(model) {
		this.id = model._id
		this.name = model.name
		this.link = model.link
		this.isPublished = model.published
		this.hasPages = !!model.pages.length
		this.updated = model.updated
		this.scripts = model.additionalScripts
		this.fontConfigs = model.projectFontConfigs
		this.formProcessing = model.formProcessing
	}
}