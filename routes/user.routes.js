const {Router} = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const { changeEmailValidators } = require('../validators/userValidators')

const router = Router()

router.post('/change-email', authMiddleware, changeEmailValidators, userController.changeEmail)
router.post('/change-name', authMiddleware, userController.changeName)


module.exports = router