module.exports = class UserDto {
	id
	email
	isActivated
	name
	roles
	avatar

	constructor(model) {
		this.id = model._id
		this.email = model.email
		this.isActivated = model.isActivated
		this.name = model.name
		this.roles = model.roles
		this.avatar = model.avatar
	}
}