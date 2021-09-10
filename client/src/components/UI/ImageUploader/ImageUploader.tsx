import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { clearFilesParamType, ImgPreviewType } from '../../../hooks/useUploadFiles.hook'
import ImgPreviewCard from '../ImgPreviewCard/ImgPreviewCard'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import './ImageUploader.scss'

interface IImageUploader {
	parentClass: string
	modClass?: string[]
	accept?: string
	name: string
	handler: (param?: any) => any
	buttonText?: string
	imgPreview: ImgPreviewType[]
	isMultiple: boolean
	clearFiles: (param: clearFilesParamType) => void
	moveFile: (index: number, moveArrow: 'up' | 'down') => void
}

const ImageUploader: React.FC<IImageUploader> = ({ parentClass, modClass, isMultiple, accept, name, handler, children, buttonText, imgPreview, clearFiles, moveFile }) => {

	const imageUploaderClasses = useCreateClassName('img-upload', parentClass, modClass)

	return (
		<div className={imageUploaderClasses}>

			<div className="img-upload__label">{children}</div>

			<input
				type="file"
				name={name}
				id={`${name}-file-input`}
				className="img-upload__hidden-input"
				multiple={isMultiple}
				accept={accept ? accept : 'image/png, image/jpeg, image/jpg'}
				onChange={handler}
			/>

			{imgPreview.map((preview, index) => {
				return (
					<ImgPreviewCard
						key={index}
						id={index}
						parentClass="img-upload"
						imgData={preview}
						singleCard={!isMultiple}
						clearFiles={clearFiles}
						moveFile={moveFile}
					/>
				)
			})}

			<label htmlFor={`${name}-file-input`}>
				<SmallIconButton
					parentClass="img-upload"
					modClass={['add-icon']}
					isNotButton={true}
				>
					{buttonText ? buttonText : 'Загрузить фото'}
				</SmallIconButton>
			</label>

		</div>
	)
}

export default ImageUploader