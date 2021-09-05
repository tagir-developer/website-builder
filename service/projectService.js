const ProjectsListDto = require('../dtos/projectsDto')
const ApiError = require('../exeptions/apiError')
const Project = require('../models/Project')
const Page = require('../models/Page')
const path = require('path')
const fs = require('fs')
const mergedPageDataDto = require('../dtos/mergedPageDataDto')
const pageDataBlocksDto = require('../dtos/pageDataBlocksDto')

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

	async changeStatus(projectId, props) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		props.forEach(i => {
			project[i.prop] = i.value
		})

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

	async generateWebsite(projectId) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		const projectPages = await Page.find({project: projectId}).populate('blocks').populate('blocks.block')
		if (!projectPages) throw ApiError.BadRequest('Произошла ошибка, у проекта нет страниц. Создайте хотя бы одну страницу.', 'danger')

		const testBlocks = new pageDataBlocksDto(projectPages[0])
		const blocksInJSON = JSON.stringify(testBlocks) // ! Этот объект вместе с projectId и pageId записываем в файл

		const fsCallback = (err) => {
			if (err) throw ApiError.BadRequest('Произошла ошибка во время создания каталогов, повторите попытку позже', 'danger')
			console.log('ОШИБКА модуля FS', err)
		}

		const userWebsitePath = path.join(__dirname, '../client-ssr/pages/', project.link)
		// fs.rmdirSync(userWebsitePath, {recursive: true}, fsCallback)
		// fs.mkdirSync(userWebsitePath, {recursive: true}, fsCallback)
		// fs.copyFileSync(path.join(__dirname, '../client-ssr/components/basicTemplate/basicTemplate.tsx'), path.join(__dirname, '../client-ssr/pages/', project.link, '/index.tsx'))

		let file = fs.readFileSync(path.join(__dirname, '../client-ssr/pages/', project.link, '/index.tsx'), 'utf-8')
		file = file.replace(/customPageBlocks/g, '111111111111111')
		fs.writeFileSync(path.join(__dirname, '../client-ssr/pages/', project.link, '/index.tsx'), file)



		return testBlocks
	}

	async getPageData(projectId, pageId) {
		const project = await Project.findById(projectId)
		if (!project) throw ApiError.BadRequest('Произошла ошибка, проект с таким id не найден', 'danger')

		const page = await Page.findById(pageId).populate('blocks').populate('blocks.block')
		if (!page) throw ApiError.BadRequest('Произошла ошибка, страница с таким id не найдена.', 'danger')

		const pageDataDto = new mergedPageDataDto(project, page)

		return pageDataDto
	}

}

module.exports = new ProjectService()