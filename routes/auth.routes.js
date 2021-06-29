const {Router} = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/default.json')
const {body, validationResult} = require('express-validator')
const {loginValidators, registerValidators} = require('../utils/validators')
const User = require('../models/User')

const router = Router()

// api/auth
router.post('/register', registerValidators, async (req, res) => {
	try {
		const errors = validationResult(req)
		if(!errors.isEmpty()) {
			return res.status(400).json({
				errors: errors.array(),
				messageType: 'danger',
				message: errors.array()[0].msg
			})
		}

		const {email, password, name} = req.body

		const hashedPassword = await bcrypt.hash(password, 12)

		const user = new User({email, password: hashedPassword, name})

		await user.save()

		return res.status(201).json({ 
			messageType: 'success',
			message: "Пользователь успешно создан" 
		})

	} catch (e) {
		return res.status(500).json({
			messageType: 'danger',
			message: "Что-то пошло не так, поробуйте снова"
		})
	}
})

router.post('/login', loginValidators, async (req, res) => {
	try {
		const {email, password} = req.body

		const errors = validationResult(req)

		if(!errors.isEmpty()) {
			res.status(400).json({
				errors: errors.array(),
				message: "Некорректные данные при регистрации"
			})
		}

		const user = await User.findOne({ email })

		const token = jwt.sign(
			{ userId: user.id },
			config.get('jwtSecret'),
			{expiresIn: '1h'}
		)

		return res.json({ token, userId: user.id })

	} catch (e) {
		res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
	}
})

module.exports = router