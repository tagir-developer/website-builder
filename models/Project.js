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
	hasPages: {
		type: Boolean,
		default: false	
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	generatedProjectLink: {
		type: String,
		default: ''
	},
	createdBy: {
		type: Types.ObjectId,
		ref: 'User',
		required: true
	},
	additionalScripts: {
		type: String,
		default: ''
	},
	projectFontConfigs: {
		fontFamily: {
			type: String,
			default: 'helvetica'
		},
		title: {
			fontSize: {
				type: String,
				default: '36px'
			},
			fontWeight: {
				type: String,
				default: 'bold'
			}
		},
		text: {
			fontSize: {
				type: String,
				default: '16px'
			}
		}
	},
	formProcessing: {
		email: {
			type: String,
			default: ''
		},
		secondaryEmail: {
			type: String,
			default: ''
		},
		letterSubject: {
			type: String,
			default: 'Заполнена форма на сайте: ' + process.env.CLIENT_URL
		},
		phoneNumber: {
			type: String,
			default: ''
		}
	}
	// pages: [ // ? Возможно список страниц не нужен и его можно будет удалить
	// 	{
	// 		type: Types.ObjectId,
	// 		ref: 'Page'
	// 	}
	// ]
})

module.exports = model('Project', Project)

