const {Router} = require('express')
const blockController = require('../controllers/blockController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createBlockValidators } = require('../validators/blockValidators')

const router = Router()

// ! Не забудь включить authMiddleware после настройки

router.post('/create-block', createBlockValidators, blockController.createBlock)
router.get('/get-with-type/:type', blockController.getWithType)

module.exports = router