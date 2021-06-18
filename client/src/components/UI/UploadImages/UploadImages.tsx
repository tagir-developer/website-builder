import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SmallIconButton from '../../UI/SmallIconButton/SmallIconButton'
import UploadImageCard from '../../UI/UploadImageCard/UploadImageCard'
import './UploadImages.scss'

interface IUploadImages {
	parentClass?: string
	modClass?: string[]
	images: {
		id: string
		imgPath: string
		img: string
	}[]
}

const UploadImages: React.FC<IUploadImages> = ({ children, parentClass, modClass, images }) => {

	const uploadImagesClasses = useCreateClassName('upload-images', parentClass)


	return (
		<div className={uploadImagesClasses}>
			{children && <div className="upload-images__label">{children}</div>}

			{images.map((i, index) => (
				<UploadImageCard
					key={index}
					parentClass="upload-images"
					img={i.img}
				/>
			))}

			<SmallIconButton 
				parentClass="upload-images" 
				modClass={['add-icon']} 
				handler={() => {}}
			>
				Загрузить фото
			</SmallIconButton>

		</div>
	)
}

export default UploadImages