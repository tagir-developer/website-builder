const {Router} = require('express')
const supportController = require('../controllers/supportController')
const {questionValidators, complaintValidators} = require('../validators/supportValidators')
const uploadImages = require('../middlewares/fileMiddlewares/uploadImages')

const router = Router()

router.post('/question', uploadImages.array('question-images', 5), questionValidators, supportController.question)
router.post('/complaint', complaintValidators, supportController.complaint)


module.exports = router