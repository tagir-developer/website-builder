const {Router} = require('express')
const {loginValidators, registerValidators, resetValidators, testValidators} = require('../validators/authValidators')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = Router()

router.post('/register', registerValidators, authController.registration)
router.post('/login', loginValidators, authController.login)
router.post('/logout', authController.logout)
router.post('/reset', authController.reset)
router.get('/password/:token', authController.password)
router.post('/password', resetValidators, authController.newPassword)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)
router.get('/users', authMiddleware, authController.users)


router.get('/test', testValidators, authController.test) // ! Тестовый роут, потом удалить


module.exports = router