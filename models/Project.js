const {Schema, model, Types} = require('mongoose')

const Project = new Schema({
	name: {
		type: String,
		required: true
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
	updated: {
		type: Boolean,
		default: false	
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	createdBy: {
		type: Types.ObjectId,
		ref: 'User',
		required: true
	},
	pages: [
		{
			type: Types.ObjectId,
			ref: 'Page'
		}
	]
})

module.exports = model('Project', Project)

