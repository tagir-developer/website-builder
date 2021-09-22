const {Router} = require('express')
const blockController = require('../controllers/blockController')
const authMiddleware = require('../middlewares/authMiddleware')
const { createBlockValidators, addBlockValidators, copyBlockValidators, sendNamePhoneValidators } = require('../validators/blockValidators')
const uploadImages = require('../middlewares/fileMiddlewares/uploadBlocksImages')

const router = Router()

// Роуты действий над карточками блоков
router.post('/create-block', authMiddleware, createBlockValidators, blockController.createBlock)
router.get('/get-with-type/:type', authMiddleware, blockController.getWithType)

// Роуты действий над списком блоков отдельной страницы
router.get('/get-page-blocks/:pageId', authMiddleware, blockController.getPageBlocks)
router.put('/add-block', authMiddleware, addBlockValidators, blockController.addBlock)
router.put('/copy-block', authMiddleware, copyBlockValidators, blockController.copyBlock)
router.post('/save-all-blocks', authMiddleware, uploadImages.any(), blockController.saveBlocks)

// Роуты обработки форм (используемые в StyledComponents)
router.post('/send-name-phone', sendNamePhoneValidators, blockController.sendNamePhone)


module.exports = router