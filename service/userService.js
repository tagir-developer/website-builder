const bcrypt = require('bcrypt')
const User = require('../models/User')
const uuid = require('uuid')
const mailService = require('../service/mailService')
const tokenService = require('../service/tokenService.js')
const UserDto = require('../dtos/userDto')
const Role = require('../models/Role')

class UserService {

	async registration(email, password, name) {

		const hashedPassword = await bcrypt.hash(password, 12)
		const activationLink = uuid.v4()
		const userRole = await Role.findOne({value: 'USER'})
		const user = await User.create({email, password: hashedPassword, name, activationLink, roles: [userRole.value]})
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)

		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }

	}


}

module.exports = new UserService()