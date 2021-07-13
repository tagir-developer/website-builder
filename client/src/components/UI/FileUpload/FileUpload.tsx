import React, { MutableRefObject, useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useUploadFiles } from '../../../hooks/useUploadFiles.hook'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import './FileUpload.scss'

interface IFileUpload {
	parentClass: string
	modClass?: string[]
}

const FileUpload: React.FC<IFileUpload> = ({ parentClass, modClass }) => {

	const fileUploadClasses = useCreateClassName('file-upload', parentClass, modClass)

	const {files, fileNames, replaceFiles} = useUploadFiles()

	console.log('FILENAMES', fileNames.join('; '))
	console.log('FILES', files)


	return (
		<div className={fileUploadClasses}>
			<input
				type="file"
				name="support-img"
				id="question-file-input"
				className="file-upload__hidden-input"
				multiple
				accept='image/png, image/jpeg, image/jpg'
				onChange={replaceFiles}
			/>
			<label htmlFor="question-file-input">
				<SmallIconButton
					parentClass="file-upload"
					modClass={['attach-file-icon']}
					isNotButton={true}
				>
					Прикрепить файл
				</SmallIconButton>
			</label>
			<ul className="file-upload__show-downloaded-files">
				{fileNames.map((i, index) => {
					return (
						<li
							key={index}
							className="file-upload__show-downloaded-files-item"
						>
							{i}
						</li>
					)
				})}
			</ul>

		</div>
	)
}

export default FileUpload