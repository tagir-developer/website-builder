const PageListDto = require('../dtos/pageDto')
const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Page = require('../models/Page')
const Project = require('../models/Project')
const Template = require('../models/Template')

class PageService {

	async createNewPage(projectId, name, link, isHomePage, openInNewWindow) {

		let newPageMustBeHome = isHomePage

		const oldHomePage = await Page.findOne({ isHomePage: true, project: projectId })
		if (!oldHomePage) {
			newPageMustBeHome = true
		}

		if (oldHomePage && newPageMustBeHome) {
			oldHomePage.isHomePage = false
			await oldHomePage.save()
		}

		const newPage = await Page.create({
			isHomePage: newPageMustBeHome,
			name,
			link,
			openInNewWindow,
			project: projectId
		})
		if (!newPage) throw ApiError.BadRequest('Не удалось создать страницу, повторите попытку позже', 'danger')

		const project = await Project.findById(projectId)
		project.hasPages = true
		await project.save()
		
		const pagesDto = this.getAllPages(projectId)
		return pagesDto
	}

	async deletePage(pageId, projectId) {
		const deletedPage = await Page.findByIdAndDelete(pageId)
		// ! Если к странице будут привязаны еще какие-то коллекции, то не забываем удалять их тоже
		if (!deletedPage) throw ApiError.BadRequest('Не удалось удалить страницу, попробуйте позже', 'danger')

		const projectHasPages = await Page.findOne({project: projectId})
		
		if (!projectHasPages) {
			const project = await Project.findById(projectId)
			project.hasPages = false
			await project.save()
		}

		const candidateHomePage = await Page.findOne({project: projectId, isHomePage: false})

		if (deletedPage.isHomePage && candidateHomePage) {
			candidateHomePage.isHomePage = true
			await candidateHomePage.save()
		}

		const pagesDto = this.getAllPages(projectId)
		return pagesDto
	}

	async copyPage(projectId, pageId) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Страница не найдена, повторите попытку позже', 'danger')

		const pageDuplicateData = {
			name: page.name + '(Копия)',
			link: page.link + '-2',
			isHomePage: false,
			openInNewWindow: page.openInNewWindow,
			project: page.project
		}

		const pageDuplicate = await Page.create({ ...pageDuplicateData })

		if (!pageDuplicate) throw ApiError.BadRequest('Не удалось создать копию, повторите попытку позже', 'danger')

		const pagesDto = this.getAllPages(projectId)
		return pagesDto
	}

	async changePage(projectId, pageId, name, link, openInNewWindow) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Произошла ошибка, страница с таким id не найдена', 'danger')

		page.name = name
		page.link = link
		page.openInNewWindow = openInNewWindow
		await page.save()

		// const pageDto = new PageListDto(page)

		// return { ...pageDto }
		const pagesDto = this.getAllPages(projectId)
		return pagesDto
	}

	async makePageHome(pageId, projectId) {

		const oldHomePage = await Page.findOne({isHomePage: true, project: projectId})
		const newHomePage = await Page.findById(pageId)

		if (!oldHomePage || !newHomePage) throw ApiError.BadRequest('Произошла ошибка, попробуйте выполнить операцию позже', 'danger')

		oldHomePage.isHomePage = false
		await oldHomePage.save()

		newHomePage.isHomePage = true
		await newHomePage.save()

		const pagesDto = this.getAllPages(projectId)
		return pagesDto

	}

	async getAllPages(projectId) {
		const pages = await Page.find({
			project: projectId
		})

		const pagesDto = pages.map(i => new PageListDto(i))

		return pagesDto
	}

	async switchAutosave(pageId, autosave) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Произошла ошибка, страница с таким id не найдена', 'danger')

		page.autosavePage = autosave
		await page.save()

		const pageDto = new PageListDto(page)

		return { ...pageDto }
	}

	async changePublicationStatus(projectId, pageId, value) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Произошла ошибка, попробуйте выполнить операцию позже', 'danger')

		page.published = value
		await page.save()

		const pagesDto = this.getAllPages(projectId)
		return pagesDto
	}

	async choosePageTemplate(pageId, templateId, isEmptyTemplate) {
		const page = await Page.findById(pageId)
		if (!page) throw ApiError.BadRequest('Страница с таким ID не найдена, попробуйте выполнить операцию позже', 'danger')

		if (isEmptyTemplate === 'isEmpty') {
			page.isNewPage = false
			await page.save
			console.log('Изменили значение isNewPage', page)
		} else {
			const template = await Template.findById(templateId)
			if (!template) throw ApiError.BadRequest('Шаблон с таким ID не найден, попробуйте выполнить операцию позже', 'danger')

			const blocksWithoutId = template.blocks.map(block => {
				delete block._id
				return block
			})

			console.log('Блоки без айдишников!!!', blocksWithoutId)

			page.blocks = blocksWithoutId
			page.isNewPage = false
			await page.save
		}

	}

	// async changePublicationStatus(projectId, pageId, value) {
	// 	const page = await Page.findById(pageId)
	// 	const project = await Project.findById(projectId)
	// 	if (!page || !project) throw ApiError.BadRequest('Произошла ошибка, попробуйте выполнить операцию позже', 'danger')

	// 	project.published = false
	// 	project.updated = false
	// 	await project.save()

	// 	page.published = value
	// 	await page.save()

	// 	// console.log('ПРОВЕРИМ', project)
	// 	const projectDto = new ProjectsListDto(project)

	// 	const pagesDto = this.getAllPages(projectId)
	// 	return {pagesDto, projectDto}
	// }


}

module.exports = new PageService()