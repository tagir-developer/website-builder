const User = require("../models/User")
const { validationResult } = require("express-validator")
const ApiError = require("../exeptions/apiError")
const Project = require("../models/Project")

class projectController {

	async createProject(req, res, next) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest(errors.array().map(i => i.msg).join('; '), 'danger', errors.array().map(i => i.param)))
			}

		const {name, link} = req.body

		const project = await Project.create({
			name, link
		})

		console.log('Созданный проект', project)

		if (!project) return next(ApiError.BadRequest('Что-то пошло не так', 'danger'))

		return res.json({
			messageType: 'success',
			message: "Проект успешно создан",
			errors: []
		})

		} catch (e) {
			next(e)
		}
	}




}

module.exports = new projectController()