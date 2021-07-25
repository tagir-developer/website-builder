const {Router} = require('express')
const userController = require('../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')
const uploadAvatarMiddleware = require('../middlewares/fileMiddlewares/uploadAvatarMiddleware')
const { changeEmailValidators, changePasswordValidators, getUserValidators } = require('../validators/userValidators')

const router = Router()

router.post('/get-user', authMiddleware, getUserValidators, userController.getUser)
router.put('/change-email', authMiddleware, changeEmailValidators, userController.changeEmail)
router.put('/change-name', authMiddleware, userController.changeName)
router.put('/change-password', authMiddleware, changePasswordValidators, userController.changePassword)
router.post('/set-avatar', authMiddleware, uploadAvatarMiddleware.single('avatar'), userController.uploadAvatar)


router.get('/test', userController.testFunc)


module.exports = router