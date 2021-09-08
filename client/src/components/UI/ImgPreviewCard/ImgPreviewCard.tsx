import React from 'react'
import './ImgPreviewCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { ImgPreviewType } from '../../../hooks/useUploadFiles.hook'
import ImgMoveBtn from '../ImgMoveBtn/ImgMoveBtn'

interface IImgPreviewCard {
	parentClass?: string
	modClass?: string[]
	imgData: ImgPreviewType
	singleCard: boolean
	clearFiles: () => void
}

const ImgPreviewCard: React.FC<IImgPreviewCard> = ({ parentClass, modClass, imgData, singleCard, clearFiles }) => {

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
					handler={() => { }}
				/>
			}

			<div className="img-preview-card__img-name">{imgData.alt}</div>

			<div
				className="img-preview-card__delete-btn"
				onClick={clearFiles}
			></div>

		</div>
	)
}

export default ImgPreviewCard