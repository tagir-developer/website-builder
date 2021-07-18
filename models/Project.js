const {Schema, model, Types} = require('mongoose')

const Project = new Schema({
	name: {
		type: String,
		default: "Новый проект"
	},
	link: {
		type: String,
		required: true,
		unique: true
	},
	published: {
		type: Boolean,
		default: false	
	},
	pages: [
		{
			type: Types.ObjectId,
			ref: 'Page'
		}
	]
})

module.exports = model('Project', Project)