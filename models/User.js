const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
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
	customUncknown: {
		type: Types.ObjectId,
		ref: 'customUnknown'
	}
})

module.exports = model('User', schema)