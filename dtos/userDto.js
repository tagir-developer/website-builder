module.exports = class UserDto {
	id
	email
	isActivated
	name
	roles

	constructor(model) {
		this.id = model._id
		this.email = model.email
		this.isActivated = model.isActivated
		this.name = model.name
		this.roles = model.roles
	}
}