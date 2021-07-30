const {Router} = require('express')
const pageController = require('../controllers/pageController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createPageValidators } = require('../validators/pageValidators')

const router = Router()

// router.post('/create-new-page', authMiddleware, pageController.createPage)
router.post('/create-new-page', authMiddleware, createPageValidators, pageController.createPage)
router.get('/get-pages', authMiddleware, pageController.getAllPages)

module.exports = router