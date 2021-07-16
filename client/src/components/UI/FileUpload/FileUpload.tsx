import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import './FileUpload.scss'

interface IFileUpload {
	parentClass: string
	modClass?: string[]
	multiple?: boolean
	accept?: string
	name: string
	handler: (param?: any) => any
	fileNames: string[]
}

const FileUpload: React.FC<IFileUpload> = ({ parentClass, modClass, multiple, accept, name, handler, fileNames }) => {

	const fileUploadClasses = useCreateClassName('file-upload', parentClass, modClass)

	return (
		<div className={fileUploadClasses}>
			<input
				type="file"
				name={name}
				id={`${name}-file-input`}
				className="file-upload__hidden-input"
				multiple={multiple}
				accept={accept ? accept : 'image/png, image/jpeg, image/jpg'}
				onChange={handler}
			/>
			<label htmlFor={`${name}-file-input`}>
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