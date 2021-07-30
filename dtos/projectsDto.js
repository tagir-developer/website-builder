module.exports = class ProjectsListDto {
	id
	name
	link
	isPublished
	hasPages
	updated

	constructor(model) {
		this.id = model._id
		this.name = model.name
		this.link = model.link
		this.isPublished = model.published
		this.hasPages = !!model.pages.length
		this.updated = model.updated
	}
}