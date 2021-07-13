import React from 'react'
import { useState } from "react"

interface IUseUploadFiles {
	bind: {
		replaceFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
	}
	files: any[]
	fileNames: string[]
	replaceFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
	clearFiles: () => void

}

export const useUploadFiles = (): IUseUploadFiles => {
	const [files, setFiles] = useState<any[]>([])
	const [fileNames, setFileNames] = useState<string[]>([])

	const replaceFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.files) {
			const fileList = event.currentTarget.files
			setFileNames([])
			setFiles([])
			for (let i = 0; i < fileList.length; i++) {
				setFileNames(prev => {
					return [...prev, fileList[i].name]
				})
				setFiles(prev => {
					return [...prev, fileList[i]]
				})
			}
		}
	}

	const clearFiles = (): void => {
		setFileNames([])
			setFiles([])
	}

	// const addNewFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	if (event.currentTarget.files) {
	// 		const fileList = event.currentTarget.files	
	// 		for (let i = 0; i < fileList.length; i++) {
	// 			setFileNames(prev => {
	// 				return [...prev, fileList[i].name]
	// 			})
	// 			setFiles(prev => {
	// 				return [...prev, fileList[i]]
	// 			})
	// 		}
	// 	}
	// }


	return {
		bind: { replaceFiles },
		files,
		fileNames,
		replaceFiles,
		clearFiles
	}

}