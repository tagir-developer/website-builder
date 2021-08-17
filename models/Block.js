const {Schema, model, Types} = require('mongoose')

const Block = new Schema({
	path: {
		type: String,
		required: true,
		unique: true
	},
	title: {
		type: String,
		required: true
	},
	preview: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	hidden: {
		type: String,
		default: false
	}
})

module.exports = model('Block', Block)

