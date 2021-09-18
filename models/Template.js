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
			block: {
				type: Types.ObjectId,
				ref: 'Block'
			},
			isNewBlock: {
				type: Boolean,
				default: true
			},
			blockIsHidden: {
				type: Boolean,
				default: false
			},
			blockConfigs: {
				type: {Object},
				required: true
			},
			blockContent: {
				type: {Object},
				required: true
			}
		}
	]


})

module.exports = model('Template', Template)

