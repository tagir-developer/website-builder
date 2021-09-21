const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')
const ApiError = require('../exeptions/apiError')

class fileSystemService {

	createProjectFilesFolder(link) {
		fs.mkdir(path.join(__dirname, '..', 'images/user-project-files/', link), { recursive: true }, (err) => {
			if (err) throw ApiError.BadRequest('Не удалось создать папку для файлов проекта', 'danger')
		})
	}

	deleteProjectFilesFolder(link) {
		rimraf(path.join(__dirname, '..', 'images/user-project-files/', link), (err) => {
			if (err) throw ApiError.BadRequest('Не удалось удалить папку с файлами проекта', 'danger')
		})
	}

	createUserWebsiteFolder(project) {
		const userWebsitePath = path.join(__dirname, '../client-ssr/pages/', project.link)
		rimraf.sync(userWebsitePath)
		fs.mkdirSync(userWebsitePath, { recursive: true })
	}

	createCopyOfTemplate(page, project) {
		const pageFileName = page.isHomePage ? 'index.tsx' : page.link + '.tsx'
		const pageFilePath = path.join(__dirname, '../client-ssr/pages/', project.link, '/' + pageFileName)
		fs.copyFileSync(path.join(__dirname, '../client-ssr/components/basicTemplate/basicTemplate.tsx'), pageFilePath)
		return pageFilePath
	}

	getPageBlocksInStringFormat(page, projectId) {
		const pageBlocks = page.blocks.map(block => {
			return {
				blockPath: block.block.path,
				blockIsHidden: block.blockIsHidden,
				blockConfigs: block.blockConfigs,
				blockContent: block.blockContent,
				projectId
			}
		})
		const blocksInJSON = JSON.stringify(pageBlocks)
		return blocksInJSON
	}

	openFileAndReplaceTemplateStrings(projectId, pageId, blocksInJSON, pageFilePath) {
		let file = fs.readFileSync(pageFilePath, 'utf-8')
		file = file.replace(/customPageBlocks/g, blocksInJSON)
		file = file.replace(/customUserProjectId/g, projectId)
		file = file.replace(/customUserPageId/g, pageId)
		fs.writeFileSync(pageFilePath, file)
	}

	deleteProjectFolder(projectLink) {
		const userWebsitePath = path.join(__dirname, '../client-ssr/pages/', projectLink)
		rimraf.sync(userWebsitePath)
	}

	includeFileLinksInBlocks(blocks, files) {
		let filesMiddleware = []
		let blocksString = blocks

		if (files) {

			filesMiddleware = files.map(file => {
				return {
					fieldName: file.fieldname,
					path: process.env.API_URL + '/' + file.destination + '/' + file.filename
				}
			})

			let parsedFiles = []
			let newArrFieldNames = []

			filesMiddleware.forEach((i, index) => {

				if (index === 0) {
					parsedFiles = [i]
					newArrFieldNames.push(i.fieldName)
					return
				}

				if (newArrFieldNames.includes(i.fieldName)) {
					const targetObj = parsedFiles.filter(item => item.fieldName === i.fieldName)[0]
					if (typeof targetObj.path === 'string') {
						targetObj.path = [targetObj.path, i.path]
					} else {
						targetObj.path = [...targetObj.path, i.path]
					}
					return
				}

				newArrFieldNames.push(i.fieldName)
				parsedFiles = [...parsedFiles, i]

			})

			parsedFiles.forEach(file => {
				const regexp = (typeof file.path === 'string') ? new RegExp(file.fieldName, 'g') : new RegExp(`"` + file.fieldName + `"`, 'g')
				const filePath = (typeof file.path === 'string') ? file.path : JSON.stringify(file.path)
				blocksString = blocksString.replace(regexp, filePath)
			})

		}

		const finalBlocks = JSON.parse(blocksString)

		return finalBlocks
	}

}

module.exports = new fileSystemService()