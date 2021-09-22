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
	generatedProject

	constructor(model) {
		this.id = model._id
		this.name = model.name
		this.link = model.link
		this.isPublished = model.published
		this.hasPages = model.hasPages
		this.updated = model.updated
		this.generatedProject = model.generatedProjectLink
		this.scripts = model.additionalScripts
		this.fontConfigs = model.projectFontConfigs
		this.formProcessing = model.formProcessing
	}
}