const User = require("../models/User")
const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const Project = require("../models/Project")
const projectService = require("../service/projectService")
const pageService = require("../service/pageService")

class pageController {

	async createPage(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

			console.log('Данные пользователя', req.user)

			const {name, link, isHomePage, openInNewWindow} = req.body

			const newPage = await pageService.createNewPage(name, link, isHomePage, openInNewWindow)

			if (!newPage) return next(ApiError.BadRequest('Не удалось создать страницу, повторите попытку позже', 'danger'))

			return res.json({
				messageType: 'success',
				message: "Страница успешно создана",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}


	async getAllPages(req, res, next) {
		try {

			// const projects = await projectService.getAllProjects()

			// if (!projects) return next(ApiError.BadRequest('Не найден ни один проект', 'danger'))

			// return res.json(projects)

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new pageController()