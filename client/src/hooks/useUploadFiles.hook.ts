import React from 'react'
import { useState } from "react"

interface IUseUploadFiles {
	bind: {
		handler: (event: React.ChangeEvent<HTMLInputElement>) => void
		name: string
		fileNames?: string[]
		listNone?: boolean
		plusIcon?: boolean
		imgPreview: ImgPreviewType[]
		isMultiple: boolean
		clearFiles: () => void
	}
	files: any[]
	fileNames: string[]
	replaceFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
	clearFiles: () => void
	formData: FormData
	fieldName: string
	imgPreview: ImgPreviewType[]
	isMultiple: boolean
}

export type ImgPreviewType = {src: string, alt: string}

export const useUploadFiles = (fieldName: string, isSingleFile: boolean = false, userId?: string, cb?: (id: string, data: FormData) => void): IUseUploadFiles => {
	const [files, setFiles] = useState<any[]>([])
	const [fileNames, setFileNames] = useState<string[]>([])
	const [imgPreview, setImgPreview] = useState<ImgPreviewType[]>([])
	const [formData, setFormData] = useState<FormData>(new FormData())
	const listNone: boolean = true
	const plusIcon: boolean = true

	const fileFilter = (file: File, typesArray: string[] = ['image/jpeg', 'image/jpg', 'image/png']): boolean => {
		return typesArray.includes(file.type)
	}

	const replaceFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files) {
			const fileList = event.currentTarget.files
			const newFormData = new FormData()
			setFileNames([])
			setImgPreview([])
			for (let i = 0; i < fileList.length; i++) {

				if (!fileFilter(fileList[i])) continue

				setFileNames(prev => {
					return [...prev, fileList[i].name]
				})

				setImgPreview(prev => {
					return [...prev, {src: URL.createObjectURL(fileList[i]), alt: fileList[i].name}]
				})

				newFormData.append(fieldName, fileList[i])
			}
			setFormData(newFormData)
		}
	}

	const singleFileAutoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files) {
			const file = event.currentTarget.files[0]
			const newFormData = new FormData()

			if (!fileFilter(file)) return

			setImgPreview([])
			setImgPreview([{src: URL.createObjectURL(file), alt: file.name}])

			newFormData.set(fieldName, file)
			cb && userId ? cb(userId, newFormData) : console.log('Вы забыли передать коллбэк фукцию, отправляющую файл на сервер')
		}
	}

	const clearFiles = (): void => {
		setFileNames([])
		setFiles([])
		setImgPreview([])
	}

	const bindObject = isSingleFile
		? { handler: singleFileAutoUpload, name: fieldName, listNone, plusIcon, imgPreview, isMultiple: !isSingleFile, clearFiles }
		: { handler: replaceFiles, fileNames, name: fieldName, imgPreview, isMultiple: !isSingleFile, clearFiles }

	return {
		// bind: { handler: replaceFiles, fileNames, name: fieldName },
		bind: bindObject,
		files,
		fileNames,
		replaceFiles,
		clearFiles,
		formData,
		fieldName,
		imgPreview,
		isMultiple: !isSingleFile
	}

}




// export const useUploadFiles = (fieldName: string, isSingleFile: boolean = false, userId?: string, cb?: (id: string, data: FormData) => void): IUseUploadFiles => {
// 	const [files, setFiles] = useState<any[]>([])
// 	const [fileNames, setFileNames] = useState<string[]>([])
// 	const [imgPreview, setImgPreview] = useState<{src: string, alt: string}[]>([{src: "", alt: ""}])
// 	const [formData, setFormData] = useState<FormData>(new FormData())
// 	const listNone: boolean = true
// 	const plusIcon: boolean = true

// 	const fileFilter = (file: File, typesArray: string[] = ['image/jpeg', 'image/jpg', 'image/png']): boolean => {
// 		return typesArray.includes(file.type)
// 	}

// 	const replaceFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		if (event.currentTarget.files) {
// 			const fileList = event.currentTarget.files
// 			const newFormData = new FormData()
// 			setFileNames([])
// 			for (let i = 0; i < fileList.length; i++) {

// 				if (!fileFilter(fileList[i])) continue

// 				setFileNames(prev => {
// 					return [...prev, fileList[i].name]
// 				})
// 				newFormData.append(fieldName, fileList[i])
// 			}
// 			setFormData(newFormData)
// 		}
// 	}

// 	const singleFileAutoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		if (event.currentTarget.files) {
// 			const file = event.currentTarget.files[0]
// 			const newFormData = new FormData()

// 			if (!fileFilter(file)) return

// 			console.log('ФАЙЛ ОБНАРУЖЕН ', file)

// 			// setFileNames([])
// 			// for (let i = 0; i < fileList.length; i++) {

// 			// 	if (!fileFilter(fileList[i])) continue

// 			// 	setFileNames(prev => {
// 			// 		return [...prev, fileList[i].name]
// 			// 	})
// 			// 	newFormData.append(fieldName, fileList[i])
// 			// }
// 			newFormData.set(fieldName, file)
// 			cb && userId ? cb(userId, newFormData) : console.log('Вы забыли передать коллбэк фукцию, отправляющую файл на сервер')
// 			// setFormData(newFormData)
// 		}
// 	}

// 	const clearFiles = (): void => {
// 		setFileNames([])
// 		setFiles([])
// 	}

// 	const bindObject = isSingleFile
// 		? { handler: singleFileAutoUpload, name: fieldName, listNone, plusIcon }
// 		: { handler: replaceFiles, fileNames, name: fieldName }

// 	return {
// 		// bind: { handler: replaceFiles, fileNames, name: fieldName },
// 		bind: bindObject,
// 		files,
// 		fileNames,
// 		replaceFiles,
// 		clearFiles,
// 		formData,
// 		fieldName
// 	}

// }