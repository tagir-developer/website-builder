const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Page = require('../models/Page')
const Project = require('../models/Project')

class PageService {

	async createNewPage(name, link, isHomePage, openInNewWindow) {
		const newPage = await Page.create({
			name, link, isHomePage, openInNewWindow
		})
		return newPage
	}

	// ! Сюда надо передавать ай ди проекта и получать все данные о странице проекта
	// async getAllPages() {
	// 	const pages = await Page.find()
	// 	const projectsList = projects.map(i => new ProjectsListDto(i))
	// 	// const projectsList = new ProjectsListDto()
	// 	return projectsList
	// }


}

module.exports = new PageService()