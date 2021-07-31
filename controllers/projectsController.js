const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const projectService = require("../service/projectService")

class projectsController {

	async createProject(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

			const newProject = await projectService.createNewProject(req.user.id, req.body.name, req.body.link)

			if (!newProject) return next(ApiError.BadRequest('Не удалось создать проект, повторите попытку позже', 'danger'))

			return res.json({
				messageType: 'success',
				message: "Проект успешно создан",
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


}

module.exports = new projectsController()