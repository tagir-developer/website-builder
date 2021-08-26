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
	autosavePage: {
		type: Boolean,
		default: false
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

module.exports = model('Page', Page)

