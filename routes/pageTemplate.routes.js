const {Router} = require('express')
const templateController = require('../controllers/templateController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createTemplateValidators } = require('../validators/templateValidators')

const router = Router()

router.post('/create-template', authMiddleware, createTemplateValidators, templateController.createTemplate)
router.get('/get-all', authMiddleware, templateController.getAllTemplates)
router.get('/get-with-type/:type', authMiddleware, templateController.getWithType)


module.exports = router