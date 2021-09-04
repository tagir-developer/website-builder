const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const projectService = require("../service/projectService")

class projectsController {

	async createProject(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const updatedProjects = await projectService.createNewProject(req.user.id, req.body.name, req.body.link)

			return res.json({
				projects: updatedProjects,
				messageType: 'success',
				message: "Проект успешно создан",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async changeProject(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {projectId, name, link} = req.body
			
			const updatedProjects = await projectService.changeProject(req.user.id, projectId, name, link)

			return res.json({
				projects: updatedProjects,
				messageType: 'success',
				message: "Проект успешно изменен",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async deleteProject(req, res, next) {
		try {
			const updatedProjects = await projectService.deleteProject(req.user.id, req.params.projectId)

			return res.json({
				projects: updatedProjects,
				messageType: 'success',
				message: "Проект успешно удален",
				errors: []
			})
		} catch (e) {
			next(e)
		}
	}

	async addProjectScripts(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {projectId, scripts} = req.body
			
			const updatedProject = await projectService.addScripts(projectId, scripts)

			return res.json({
				project: updatedProject,
				messageType: 'success',
				message: "Скрипты успешно добавлены на ваш сайт",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async changeStatus(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {projectId, propsArr} = req.body
			const props = JSON.parse(propsArr)
			
			const updatedProject = await projectService.changeStatus(projectId, props)

			return res.json({
				project: updatedProject,
				messageType: 'success',
				message: "Стстус проекта обновлен",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async setFontConfigs(req, res, next) {
		try {
			ApiError.ValidationErrorChecking(req)

			const {projectId, fontFamily, titleSize, titleWeight, textSize} = req.body
			
			const updatedProject = await projectService.setFontConfigs(projectId, fontFamily, titleSize, titleWeight, textSize)

			return res.json({
				project: updatedProject,
				messageType: 'success',
				message: "Настройки шрифта проекта изменены",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}

	async formProcessing(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const {projectId, email, secondaryEmail, letterSubject, phoneNumber} = req.body
			
			const updatedProject = await projectService.formProcessing(projectId, email, secondaryEmail, letterSubject, phoneNumber)

			return res.json({
				project: updatedProject,
				messageType: 'success',
				message: "Настройки обработки форм проекта успешно изменены",
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}


	async getAllProjects(req, res, next) {
		try {

			const projects = await projectService.getAllProjects(req.user.id)

			if (!projects) return next(ApiError.BadRequest('Не найден ни один проект', 'danger'))

			return res.json(projects)

		} catch (e) {
			next(e)
		}
	}

	async generateWebsite(req, res, next) {
		try {

			ApiError.ValidationErrorChecking(req)

			const {projectId} = req.body

			await projectService.generateWebsite(projectId)

			return res.json({
				messageType: 'success',
				message: `Ваш сайт успешно создан и опубликован!`,
				errors: []
			})

		} catch (e) {
			next(e)
		}
	}


}

module.exports = new projectsController()