const ApiError = require("../exeptions/apiError")
const pageService = require("../service/pageService")

class pageController {

	async createPage(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

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

			const { pageId, projectId } = req.params

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
			const { projectId, pageId } = req.body

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
			ApiError.ValidationErrorChecking(req)

			const { projectId, pageId, name, link, openInNewWindow } = req.body
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

			const { pageId, projectId } = req.body

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

			return res.json(projectPages)
		} catch (e) {
			next(e)
		}
	}

	async switchAutosave(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { pageId, autosave } = req.body

			const pageDto = await pageService.switchAutosave(pageId, autosave)

			return res.json({
				page: pageDto,
				messageType: pageDto.autosavePage ? 'success' : 'warning',
				message: pageDto.autosavePage ? "Теперь каждое ваше действие будет сохраняться автоматически" : "Автосохранение выключено",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async changePublicationStatus(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { projectId, pageId, value } = req.body

			const updatedProjectPages = await pageService.changePublicationStatus(projectId, pageId, value)

			return res.json({
				pages: updatedProjectPages,
				messageType: 'success',
				message: "Страница успешно опубликована. Обновите проект, чтобы изменения вступили в силу.",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async choosePageTemplate(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const { pageId, templateId, isEmptyTemplate } = req.body

			await pageService.choosePageTemplate(pageId, templateId, isEmptyTemplate)

			return res.json({
				messageType: 'success',
				message: "Вы выбрали шаблон страницы",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new pageController()