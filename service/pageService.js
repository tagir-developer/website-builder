const PageListDto = require('../dtos/pageDto')
const ApiError = require('../exeptions/apiError')
const Page = require('../models/Page')

class PageService {

	async createNewPage(projectId, name, link, isHomePage, openInNewWindow) {
		const newPage = await Page.create({
			name, 
			link, 
			isHomePage, 
			openInNewWindow,
			project: projectId
		})
		return newPage
	}

	async getAllPages(projectId) {
		const pages = await Page.find({
			project: projectId
		})

		const pagesDto = pages.map(i => new PageListDto(i))

		return pagesDto
	}


}

module.exports = new PageService()