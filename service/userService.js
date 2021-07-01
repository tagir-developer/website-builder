const bcrypt = require('bcrypt')
const User = require('../models/User')
const uuid = require('uuid')
const mailService = require('../service/mailService')
const tokenService = require('../service/tokenService.js')

class UserService {

	async registration(email, password, name) {

		const hashedPassword = await bcrypt.hash(password, 12)
		const activationLink = uuid.v4()
		const user = await User.create({email, password: hashedPassword, name, activationLink})
		await mailService.sendActivationMail(email, activationLink)
		const tokens = tokenService.generateTokens()


	}


}

module.exports = new UserService()