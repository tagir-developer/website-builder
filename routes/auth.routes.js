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
			res.status(400).json({
				errors: errors.array(),
				message: "Некорректные данные при регистрации"
			})
		}

		const {email, password, passwordConfirm, name} = req.body

		if (password !== passwordConfirm) {
			return res.status(400).json({message: "Пароли не совпадают"}) // Возможно эту проверку лучше перенести в валидаторы
		}

		const hashedPassword = await bcrypt.hash(password, 12)

		const user = new User({email, password: hashedPassword, name})

		await user.save()

		res.status(201).json({ message: "Пользователь успешно создан" })

	} catch (e) {
		res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
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

router.get('/test', (req, res) => {
	try {
		res.json({message: 'СРАБОТАЛО!'})

	} catch (e) {
		res.status(500).json({message: "Что-то пошло не так, поробуйте снова"})
	}
})

module.exports = router