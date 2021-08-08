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
	additionalScripts: {
		type: String,
		default: ''
	},
	projectFontConfigs: {
		switchedOn: {
			type: Boolean,
			default: false
		},
		fontFamily: {
			type: String,
			default: ''
		},
		title: {
			fontSize: {
				type: String,
				default: ''
			},
			fontWeight: {
				type: String,
				default: ''
			}
		},
		text: {
			fontSize: {
				type: String,
				default: ''
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
	},
	pages: [ // ? Возможно список страниц не нужен и его можно будет удалить
		{
			type: Types.ObjectId,
			ref: 'Page'
		}
	]
})

module.exports = model('Project', Project)

