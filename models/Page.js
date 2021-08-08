const {Schema, model, Types} = require('mongoose')

const Page = new Schema({
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
	isHomePage: {
		type: Boolean,
		default: false	
	},
	openInNewWindow: {
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
	project: {
			type: Types.ObjectId,
			ref: 'Project',
			required: true
	}

})

module.exports = model('Page', Page)

