const {Schema, model} = require('mongoose')

const User = new Schema({
	name: {
		type: String,
		default: "Новый пользователь"
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true		
	},
	avatar: {
		type: String,
		default: ""
	},
	isActivated: {
		type: Boolean,
		default: false
	},
	activationLink: {
		type: String
	},
	resetToken: String,
	resetTokenExp: Date,
	roles: [{
		type: String,
		ref: 'Role'
	}]
})

module.exports = model('User', User)