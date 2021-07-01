const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
	name: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,		
	},
	roles: {
		type: Types.ObjectId,
		ref: 'Role'
	},
	isActivated: {
		type: Boolean,
		default: false
	},
	activationLink: {
		type: String
	},
})

module.exports = model('User', UserSchema)