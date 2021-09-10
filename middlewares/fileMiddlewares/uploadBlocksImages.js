const multer = require('multer')

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'images/random-test') // ! Потом заменим на папку именованную по названию проекта
	},
	filename(req, file, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
	}
})

const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg']

const fileFilter = (req, file, cb) => {
	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

module.exports = multer({
	storage, fileFilter
})
