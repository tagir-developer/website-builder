const {Router} = require('express')
const templateController = require('../controllers/templateController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createTemplateValidators, addBlockListValidators } = require('../validators/templateValidators')

const router = Router()

// ! Не забудь включить authMiddleware после настройки

router.post('/create-template', createTemplateValidators, templateController.createTemplate)
// router.put('/add-block-list', addBlockListValidators, templateController.addBlocks)
router.get('/get-all', templateController.getAllTemplates)
router.get('/get-with-type/:type', templateController.getWithType)
// router.put('/change-page', authMiddleware, updatePageValidators, pageController.changePage)
// router.delete('/delete-page/:projectId/:pageId', authMiddleware, pageController.deletePage)

module.exports = router