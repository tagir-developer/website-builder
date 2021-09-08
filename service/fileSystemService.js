const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')

class fileSystemService {

	createUserWebsiteFolder(project) {
		const userWebsitePath = path.join(__dirname, '../client-ssr/pages/', project.link)
		fs.rmdirSync(userWebsitePath, {recursive: true})
		fs.mkdirSync(userWebsitePath, {recursive: true})
	}

	createCopyOfTemplate(page, project) {
		const pageFileName = page.isHomePage ? 'index.tsx' : page.link + '.tsx'
		const pageFilePath = path.join(__dirname, '../client-ssr/pages/', project.link, '/' + pageFileName)
		fs.copyFileSync(path.join(__dirname, '../client-ssr/components/basicTemplate/basicTemplate.tsx'), pageFilePath)
		return pageFilePath
	}

	getPageBlocksInStringFormat(page) {
		const pageBlocks = page.blocks.map(block => {
			return {
				blockPath: block.block.path,
				blockIsHidden: block.blockIsHidden,
				blockConfigs: block.blockConfigs,
				blockContent: block.blockContent
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

}

module.exports = new fileSystemService()