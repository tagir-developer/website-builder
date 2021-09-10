import React from 'react'
import './ImgPreviewCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { clearFilesParamType, ImgPreviewType } from '../../../hooks/useUploadFiles.hook'
import ImgMoveBtn from '../ImgMoveBtn/ImgMoveBtn'

interface IImgPreviewCard {
	parentClass?: string
	modClass?: string[]
	imgData: ImgPreviewType
	singleCard: boolean
	clearFiles: (param: clearFilesParamType) => void
	id: number
	moveFile: (index: number, moveArrow: 'up' | 'down') => void
}

const ImgPreviewCard: React.FC<IImgPreviewCard> = ({ parentClass, modClass, imgData, singleCard, clearFiles, id, moveFile }) => {

	const imgPreviewCardClasses = useCreateClassName('img-preview-card', parentClass, modClass)

	return (
		<div className={imgPreviewCardClasses}>
			<div className="img-preview-card__image-wrapper">
				<img
					className="img-preview-card__preview-image"
					src={imgData.src}
					alt={imgData.alt}
				/>
			</div>

			{singleCard
				? null
				: <ImgMoveBtn
					parentClass="img-preview-card"
					handler={moveFile}
					cardId={id}
				/>
			}

			<div className="img-preview-card__img-name">{imgData.alt}</div>

			<div
				className="img-preview-card__delete-btn"
				onClick={() => clearFiles(id)}
			></div>

		</div>
	)
}

export default ImgPreviewCard