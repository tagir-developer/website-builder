const {Router} = require('express')

const router = Router()

// api/auth
router.post('/register', async (req, res) => {
	try {

		const {name, email, password, repeatPassword} = req.body



	} catch (e) {
		res.status(200).json({message: "Что-то пошло не так, поробуйте снова"})
	}
})

module.exports = router