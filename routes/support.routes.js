const {Router} = require('express')
const supportController = require('../controllers/supportController')
const {questionValidators, complaintValidators} = require('../validators/supportValidators')

const router = Router()

router.post('/question', questionValidators, supportController.question)
router.post('/complaint', complaintValidators, supportController.complaint)


module.exports = router