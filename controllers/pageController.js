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

			const { projectId, name, link, isHomePage, openInNewWindow } = req.body

			const pagesDto = await pageService.createNewPage(projectId, name, link, isHomePage, openInNewWindow)

			return res.json({
				pages: pagesDto,
				messageType: 'success',
				message: "Страница успешно создана",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async deletePage(req, res, next) {
		try {

			const {pageId, projectId} = req.params

			// const pagesDto = pageService.deletePage(req.params.pageId)
			const pagesDto = await pageService.deletePage(pageId, projectId)

			return res.json({
				pages: pagesDto,
				messageType: 'success',
				message: "Страница успешно удалена",
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

	async copyPage(req, res, next) {
		try {
			const {projectId, pageId} = req.body
			
			const updatedProjectPages = await pageService.copyPage(projectId, pageId)

			return res.json({
				pages: updatedProjectPages,
				messageType: 'success',
				message: "Создана копия страницы",
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

	async changePage(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

			const {projectId, pageId, name, link, openInNewWindow} = req.body
			const updatedProjectPages = await pageService.changePage(projectId, pageId, name, link, openInNewWindow)

			return res.json({
				pages: updatedProjectPages,
				messageType: 'success',
				message: "Страница успешно изменена",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async makePageHome(req, res, next) {
		try {

			const {pageId, projectId} = req.body

			const updatedProjectPages = await pageService.makePageHome(pageId, projectId)

			return res.json({
				pages: updatedProjectPages,
				messageType: 'success',
				message: "Главная страница изменена",
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