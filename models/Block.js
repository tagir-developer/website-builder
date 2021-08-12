const {Schema, model, Types} = require('mongoose')

const Block = new Schema({
	path: {
		type: String,
		required: true
	}
})

module.exports = model('Block', Block)

