const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Project = require('../models/Project')
const Page = require('../models/Page')

class ProjectService {

	async createNewProject(userId, name, link) {

		const newProject = await Project.create({
			name, 
			link,
			createdBy: userId
		})
		if (!newProject) throw ApiError.BadRequest('Не удалось создать проект, повторите попытку позже', 'danger')

		const projects = this.getAllProjects(userId)
		return projects
	}

	async changeProject(userId, projectId, name, link) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		project.name = name
		project.link = link
		await project.save()

		const projects = this.getAllProjects(userId)
		return projects
	}

	async deleteProject(userId, projectId) {
		const deletedProject = await Project.findByIdAndDelete(projectId)
		await Page.deleteMany({project: projectId})

		if (!deletedProject) throw ApiError.BadRequest('Не удалось удалить проект, попробуйте позже', 'danger')

		const projects = this.getAllProjects(userId)
		return projects
	}

	async addScripts(projectId, scripts) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		project.additionalScripts = scripts
		await project.save()

		const updatedProject = new ProjectsListDto(project)
		return updatedProject
	}

	async setFontConfigs(projectId, fontFamily, titleSize, titleWeight, textSize) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		project.projectFontConfigs.fontFamily = fontFamily
		project.projectFontConfigs.title.fontSize = titleSize
		project.projectFontConfigs.title.fontWeight = titleWeight
		project.projectFontConfigs.text.fontSize = textSize
		await project.save()

		const updatedProject = new ProjectsListDto(project)
		return updatedProject
	}

	async formProcessing(projectId, email, secondaryEmail, letterSubject, phoneNumber) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		project.formProcessing.email = email
		project.formProcessing.secondaryEmail = secondaryEmail
		project.formProcessing.letterSubject = letterSubject
		project.formProcessing.phoneNumber = phoneNumber
		await project.save()

		const updatedProject = new ProjectsListDto(project)
		return updatedProject
	}

	async getAllProjects(userId) {
		const projects = await Project.find({
			createdBy: userId
		})
		const projectsList = projects.map(i => new ProjectsListDto(i))
		return projectsList
	}


}

module.exports = new ProjectService()