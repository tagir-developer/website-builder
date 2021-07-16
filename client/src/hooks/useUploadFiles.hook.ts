import React, { MutableRefObject } from 'react'
import { useState } from "react"

interface IUseUploadFiles {
	bind: {
		handler: (event: React.ChangeEvent<HTMLInputElement>) => void
		name: string
		fileNames: string[]
	}
	files: any[]
	fileNames: string[]
	replaceFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
	clearFiles: () => void
	formData: FormData
	fieldName: string
}

export const useUploadFiles = (fieldName: string): IUseUploadFiles => {
	const [files, setFiles] = useState<any[]>([])
	const [fileNames, setFileNames] = useState<string[]>([])
	const [formData, setFormData] = useState<FormData>(new FormData())

	const fileFilter = (file: File, typesArray: string[] = ['image/jpeg', 'image/jpg', 'image/png']): boolean => {
		return typesArray.includes(file.type)
	}

	const replaceFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files) {
			const fileList = event.currentTarget.files
			const newFormData = new FormData()
			setFileNames([])
			for (let i = 0; i < fileList.length; i++) {

				if (!fileFilter(fileList[i])) continue

				setFileNames(prev => {
					return [...prev, fileList[i].name]
				})
				newFormData.append(fieldName, fileList[i])
			}
			setFormData(newFormData)
		}
	}

	const clearFiles = (): void => {
		setFileNames([])
			setFiles([])
	}

	return {
		bind: { handler: replaceFiles, fileNames, name: fieldName },
		files,
		fileNames,
		replaceFiles,
		clearFiles,
		formData,
		fieldName
	}

}