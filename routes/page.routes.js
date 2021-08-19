const {Router} = require('express')
const pageController = require('../controllers/pageController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createPageValidators, updatePageValidators, addBlockValidators } = require('../validators/pageValidators')

const router = Router()

router.post('/create-new-page', authMiddleware, createPageValidators, pageController.createPage)
router.put('/change-page', authMiddleware, updatePageValidators, pageController.changePage)
router.put('/make-page-home', authMiddleware, pageController.makePageHome)
// router.put('/add-block', addBlockValidators, pageController.addBlock) // ! Добавить AuthMiddleware
router.get('/get-pages/:projectId', authMiddleware, pageController.getAllPages)
router.delete('/delete-page/:projectId/:pageId', authMiddleware, pageController.deletePage)
router.post('/create-copy', authMiddleware, pageController.copyPage)

module.exports = router