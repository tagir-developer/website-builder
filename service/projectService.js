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

		// const projectDto = new ProjectsListDto(project)

		// return {...projectDto}

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

	async getAllProjects(userId) {
		const projects = await Project.find({
			createdBy: userId
		})
		const projectsList = projects.map(i => new ProjectsListDto(i))
		return projectsList
	}


}

module.exports = new ProjectService()