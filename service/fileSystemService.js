const path = require('path')
const fs = require('fs')
const rimraf = require('rimraf')

class fileSystemService {

	createUserWebsiteFolder(project) {
		const userWebsitePath = path.join(__dirname, '../client-ssr/pages/', project.link)
		fs.rmdirSync(userWebsitePath, { recursive: true })
		fs.mkdirSync(userWebsitePath, { recursive: true })
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

	includeFileLinksInBlocks(blocks, files) {
		let filesMiddleware = []
		let blocksString = blocks

		// const fileName = new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname
		// const avatarPath = path.join(__dirname, '..', 'images/avatars/thumb_150', fileName)

		// 0] ФАААААААЙЛ {
		// 	[0]   fieldname: '613b8f5eea50b616eced11be_backgroundImage',
		// 	[0]   originalname: 'orange-2.jpg',
		// 	[0]   encoding: '7bit',
		// 	[0]   mimetype: 'image/jpeg',
		// 	[0]   destination: 'images/random-test',
		// 	[0]   filename: '2021-09-10T17-20-49.710Z-orange-2.jpg',
		// 	[0]   path: 'images\\random-test\\2021-09-10T17-20-49.710Z-orange-2.jpg',
		// 	[0]   size: 591969
		// 	[0] }

		// if (files) {
		// 	filesMiddleware = files.map(file => {
		// 		return {
		// 			fieldName: file.fieldname, 
		// 			path: file.destination + '/' + file.filename
		// 		}
		// 	})
		// }

		filesMiddleware = [
			{
				fieldName: '613b96b7c702be1fb4b389c7_backgroundImage',
				path: ['images/random-test/2021-09-10T17-32-57.230Z-apple-3.jpg', 'images/random-test/2021-09-10T17-32-57.230Z-apple-4.jpg', 'images/random-test/2021-09-10T17-32-57.230Z-apple-5.jpg']
			},
			{
				fieldName: '613b96c1c702be1fb4b389d0_backgroundImage',
				path: 'images/random-test/2021-09-10T17-32-57.233Z-orange-1.jpg'
			}
		]

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
			// const regexp = new RegExp(`"${file.fieldName}"`, 'g')
			// const filePath = (typeof file.path === 'string') ? `"${file.path}"` : JSON.stringify(`"${file.path}"`)
			const regexp = (typeof file.path === 'string') ? new RegExp(file.fieldName, 'g') : new RegExp(`"` + file.fieldName + `"`, 'g')
			const filePath = (typeof file.path === 'string') ? file.path : JSON.stringify(file.path)
			blocksString = blocksString.replace(regexp, filePath)
		})

		console.log('ФИНАЛЬНЫЕ БЛОКИ В JSON:', blocksString)

		const finalBlocks = JSON.parse(blocksString)

		console.log('ФИНАЛЬНЫЕ БЛОКИ:', finalBlocks)

		// return finalBlocks
	}

}

module.exports = new fileSystemService()