import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './UploadImageCard.scss'
import BlockMoveBtn from '../BlockMoveBtn/BlockMoveBtn'

interface IUploadImageCard {
	parentClass?: string
	modClass?: string[]
	deleteHandler?: (param?: any) => void
	img: string

}

const UploadImageCard: React.FC<IUploadImageCard> = ({ parentClass, modClass, deleteHandler, img }) => {

	const classes = useCreateClassName('upload-image-card', parentClass, modClass)

	return (
		<div className={classes}>

			<div className="upload-image-card__preview-border">
				<img src={img} className="upload-image-card__preview-img" alt=""></img>
			</div>

			<BlockMoveBtn 
				parentClass="upload-image-card" 
				modClass={['for-cards']} 
				handler={() => {}} 
				tooltipTextUp="Переместить выше"
				tooltipTextDown="Переместить ниже"
			/>

			<div className="upload-image-card__delete-btn" onClick={deleteHandler}></div>

		</div>
	)
}

export default UploadImageCard