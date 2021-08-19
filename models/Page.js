const { Schema, model, Types } = require('mongoose')

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
	},
	isNewPage: {
		type: Boolean,
		default: true
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
				type: String,
				default: false
			},
			blockConfigs: {Object},
			blockContent: {Object}
		}
	]

})

module.exports = model('Page', Page)

