const {Router} = require('express')
const blockController = require('../controllers/blockController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createBlockValidators, addBlockValidators } = require('../validators/blockValidators')

const router = Router()

// ! Не забудь включить authMiddleware после настройки

// Роуты действий над карточками блоков
router.post('/create-block', createBlockValidators, blockController.createBlock)
router.get('/get-with-type/:type', blockController.getWithType)

// Роуты действий над списком блоков отдельной страницы
router.get('/get-page-blocks/:pageId', blockController.getPageBlocks)
router.put('/add-block', addBlockValidators, blockController.addBlock)

module.exports = router