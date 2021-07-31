const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Project = require('../models/Project')

class ProjectService {

	async createNewProject(userId, name, link) {
		console.log('userID', userId)
		const newProject = await Project.create({
			name, 
			link,
			createdBy: userId
		})
		return newProject
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