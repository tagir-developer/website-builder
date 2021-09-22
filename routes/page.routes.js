const {Router} = require('express')
const pageController = require('../controllers/pageController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createPageValidators, updatePageValidators, switchAutosavePageValidators, changePublicationStatusValidators, choosePageTemplateValidators } = require('../validators/pageValidators')

const router = Router()

router.post('/create-new-page', authMiddleware, createPageValidators, pageController.createPage)
router.put('/change-page', authMiddleware, updatePageValidators, pageController.changePage)
router.put('/switch-autosave', authMiddleware, switchAutosavePageValidators, pageController.switchAutosave)
router.put('/choose-page-template', authMiddleware, choosePageTemplateValidators, pageController.choosePageTemplate)

router.put('/change-publication-status', authMiddleware, changePublicationStatusValidators, pageController.changePublicationStatus)
router.put('/make-page-home', authMiddleware, pageController.makePageHome)
router.get('/get-pages/:projectId', authMiddleware, pageController.getAllPages)
router.delete('/delete-page/:projectId/:pageId', authMiddleware, pageController.deletePage)
router.post('/create-copy', authMiddleware, pageController.copyPage)

module.exports = router