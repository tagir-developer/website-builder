const { Schema, model, Types } = require('mongoose')

const Template = new Schema({
	type: [
		{
			type: String,
			required: true
		}
	],
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	preview: {
		type: String,
		required: true
	},
	blocks: [
		{
			type: Types.ObjectId,
			ref: 'Block'
		}
	]


})

module.exports = model('Template', Template)

