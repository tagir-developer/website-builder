const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Project = require('../models/Project')

class ProjectService {

	async createNewProject(name, link) {
		const newProject = await Project.create({
			name, link
		})
		return newProject
	}

	async getAllProjects() {
		const projects = await Project.find()
		const projectsList = projects.map(i => new ProjectsListDto(i))
		// const projectsList = new ProjectsListDto()
		return projectsList
	}


}

module.exports = new ProjectService()