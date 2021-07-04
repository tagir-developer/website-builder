const bcrypt = require('bcrypt')
const User = require('../models/User')
const uuid = require('uuid')
const mailService = require('../service/mailService')
const tokenService = require('../service/tokenService.js')
const UserDto = require('../dtos/userDto')
const Role = require('../models/Role')
const ApiError = require('../exeptions/apiError')

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

	async login(email, password) {
		const user = await User.findOne({email})
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({...userDto})
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken)
		return token
	}

	async refresh(refreshToken) {
		console.log('REFRESH: START', refreshToken)
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		console.log('REFRESH: ', userData)
		const tokenFromDb = await tokenService.findToken(refreshToken)
		console.log('REFRESH: tokenFromDb', tokenFromDb)
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}
		const user = await User.findById(userData.id)
		console.log('REFRESH: USER', user)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({...userDto})
		console.log('REFRESH: TOKENS', tokens)
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return { ...tokens, user: userDto }

	}

	async activate(activationLink) {
		const user = await User.findOne({activationLink})
		if (!user) {
			throw ApiError.BadRequest('Некорректная ссылка активации')
		}
		user.isActivated = true
		await user.save()
	}

	async getAllUsers() {
		const users = await User.find()
		return users
	}


}

module.exports = new UserService()