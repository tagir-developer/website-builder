module.exports = class ProjectsListDto {
	id
	name
	link
	isPublished
	hasPages

	constructor(model) {
		this.id = model._id
		this.name = model.name
		this.link = model.link
		this.isPublished = model.published
		this.hasPages = !!model.pages.length
	}
}