import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { ImgPreviewType } from '../../../hooks/useUploadFiles.hook'
import ImgPreviewCard from '../ImgPreviewCard/ImgPreviewCard'
import SmallIconButton from '../SmallIconButton/SmallIconButton'
import './ImageUploader.scss'

interface IImageUploader {
	parentClass: string
	modClass?: string[]
	// multiple?: boolean
	accept?: string
	name: string
	handler: (param?: any) => any
	// fileNames?: string[]
	// listNone?: boolean
	buttonText?: string
	imgPreview: ImgPreviewType[]
	isMultiple: boolean
	clearFiles: () => void
}

const ImageUploader: React.FC<IImageUploader> = ({ parentClass, modClass, isMultiple, accept, name, handler, children, buttonText, imgPreview, clearFiles }) => {

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
					// <img
					// 	key={index}
					// 	className="img-upload__img-preview"
					// 	src={preview.src}
					// 	alt={preview.alt}
					// />
					<ImgPreviewCard
						key={index}
						parentClass="img-upload"
						imgData={preview}
						singleCard={!isMultiple}
						clearFiles={clearFiles}
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
			{/* {listNone
				? null
				: <ul className="img-upload__show-downloaded-files">
					{fileNames?.map((i, index) => {
						return (
							<li
								key={index}
								className="img-upload__show-downloaded-files-item"
							>
								{i}
							</li>
						)
					})}
				</ul>
			} */}





			{/* <ul className="img-upload__show-downloaded-files">
				{fileNames.map((i, index) => {
					return (
						<li
							key={index}
							className="img-upload__show-downloaded-files-item"
						>
							{i}
						</li>
					)
				})}
			</ul> */}

		</div>
	)
}

export default ImageUploader