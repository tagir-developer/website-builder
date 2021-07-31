const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const pageService = require("../service/pageService")

class pageController {

	async createPage(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

			const {projectId, name, link, isHomePage, openInNewWindow} = req.body

			const newPage = await pageService.createNewPage(projectId, name, link, isHomePage, openInNewWindow)

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

			const projectPages = await pageService.getAllPages(req.params.projectId)

			// if (!projectPages) return next(ApiError.BadRequest('У вас еще нет страниц', 'danger'))

			return res.json(projectPages)

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new pageController()