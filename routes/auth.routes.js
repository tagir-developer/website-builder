const {Router} = require('express')
const config = require('../config/default.json')
const {loginValidators, registerValidators} = require('../utils/validators')
const User = require('../models/User')
const Role = require('../models/Role')
const authController = require('../controllers/authController')

const router = Router()

router.post('/register', registerValidators, authController.registration)
router.post('/login', loginValidators, authController.login)
router.get('/logout', authController.logout)
router.get('/activate/:link', authController.activate)
router.get('/refresh', authController.refresh)
router.get('/test', authController.test)



module.exports = router