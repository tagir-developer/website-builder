module.exports = class PageListDto {
	id
	name
	link
	published
	updated
	isHomePage
	openInNewWindow
	project
	createdAt

	constructor(model) {
		this.id = model._id
		this.name = model.name
		this.link = model.link
		this.published = model.published
		this.updated = model.updated
		this.isHomePage = model.isHomePage
		this.openInNewWindow = model.openInNewWindow
		this.project = model.project
		this.createdAt = model.createdAt
		// this.hasPages = !!model.pages.length
	}
}