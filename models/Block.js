const {Schema, model} = require('mongoose')

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
	blockDefaultConfigs: {
		type: {Object},
		required: true
	},
	blockDefaultContent: {
		type: {Object},
		required: true
	}

})

module.exports = model('Block', Block)

