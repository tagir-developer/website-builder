module.exports = class TemplateDto {
	id
	title
	description
	image
	preview

	constructor(model) {
		this.id = model._id
		this.title = model.title
		this.description = model.description
		this.image = model.image
		this.preview = model.preview
		
	}
}