import produce from 'immer'
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
		clearFiles: (param: clearFilesParamType) => void
		moveFile: (index: number, moveArrow: 'up' | 'down') => void
	}
	files: File[]
	fileNames: string[]
	replaceFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
	clearFiles: (param: clearFilesParamType) => void
	formData: FormData
	fieldName: string
	imgPreview: ImgPreviewType[]
	isMultiple: boolean
}

export type ImgPreviewType = { src: string, alt: string }
export type clearFilesParamType = number | 'clearAll'

export const useUploadFiles = (fieldName: string, isSingleFile: boolean = false, userId?: string, cb?: (id: string, data: FormData) => void): IUseUploadFiles => {
	const [files, setFiles] = useState<File[]>([])
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
			setFiles([])
			setFileNames([])
			setImgPreview([])
			for (let i = 0; i < fileList.length; i++) {

				if (!fileFilter(fileList[i])) continue

				setFiles(prev => {
					return [...prev, fileList[i]]
				})

				setFileNames(prev => {
					return [...prev, fileList[i].name]
				})

				setImgPreview(prev => {
					return [...prev, { src: URL.createObjectURL(fileList[i]), alt: fileList[i].name }]
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

			setFiles([file])
			setImgPreview([{ src: URL.createObjectURL(file), alt: file.name }])

			newFormData.set(fieldName, file)
			if (cb && userId) cb(userId, newFormData)
		}
	}

	const clearFiles = (id: clearFilesParamType = 'clearAll'): void => {
		if (id !== 'clearAll') {
			setFiles(prev => {
				return [...prev.filter((i, index) => index !== id)]
			})
			setImgPreview(prev => {
				return [...prev.filter((i, index) => index !== id)]
			})
		} else {
			setFileNames([])
			setFiles([])
			setImgPreview([])
			setFormData(new FormData())
		}

	}

	const moveFile = (index: number, moveArrow: 'up' | 'down'): void => {

		setFiles(prev => {
			const newFilesArray: any[] = produce(prev, (draft: any[]) => {
					if (index !== 0 && moveArrow === 'up') {
						const prevFile = draft[index - 1]
						const targetFile = draft[index]
						draft[index - 1] = targetFile
						draft[index] = prevFile
					}
					if (index !== (prev.length - 1) && moveArrow === 'down') {
						const nextFile = draft[index + 1]
						const targetFile = draft[index]
						draft[index + 1] = targetFile
						draft[index] = nextFile
					}
			})
			return newFilesArray
		})

		setImgPreview(prev => {
			const newFilesArray: ImgPreviewType[] = produce(prev, (draft: ImgPreviewType[]) => {
					if (index !== 0 && moveArrow === 'up') {
						const prevFile = draft[index - 1]
						const targetFile = draft[index]
						draft[index - 1] = targetFile
						draft[index] = prevFile
					}
					if (index !== (prev.length - 1) && moveArrow === 'down') {
						const nextFile = draft[index + 1]
						const targetFile = draft[index]
						draft[index + 1] = targetFile
						draft[index] = nextFile
					}
			})
			return newFilesArray
		})


		const newFormData = new FormData()
		for (let i = 0; i < files.length; i++) {
			newFormData.append(fieldName, files[i])
		}
		setFormData(newFormData)

	}

	const bindObject = isSingleFile
		? { handler: singleFileAutoUpload, name: fieldName, listNone, plusIcon, imgPreview, isMultiple: !isSingleFile, clearFiles, moveFile }
		: { handler: replaceFiles, fileNames, name: fieldName, imgPreview, isMultiple: !isSingleFile, clearFiles, moveFile }

	return {
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