module.exports = class BlockDto {
	id
	title
	path
	preview
	type
	hidden

	constructor(model) {
		this.id = model._id
		this.title = model.title
		this.path = model.path
		this.preview = model.preview
		this.type = model.type		
		this.hidden = model.hidden		
	}
}