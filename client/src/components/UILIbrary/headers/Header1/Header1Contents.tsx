import React from 'react'
import './Header1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import UploadImages from '../../../UI/UploadImages/UploadImages'
import { useInput } from '../../../../hooks/useInput.hook'
import img1 from './testImages/img1.jpg'
import img2 from './testImages/img2.jpg'

interface IHeader1Contents {
	parentClass?: string
	modClass?: string[]
}

const Header1Contents: React.FC<IHeader1Contents> = ({ parentClass }) => {

	const classes = useCreateClassName('lib-header-1-contents', parentClass)

	const titleInput = useInput('')
	const textInput = useInput('')
	const mainText = useInput('')

	const images = [
		{
			id: '4646456',
			imgPath: './img/test.jpg',
			img: img1
		},
		{
			id: '1231312',
			imgPath: './img/test2.jpg',
			img: img2
		},
	]

	return (
		<div className={classes}>
			
		<Input parentClass="lib-header-1-contents" type="text" {...titleInput.bind} >Текст заголовка</Input>
		<Input parentClass="lib-header-1-contents" type="text" {...textInput.bind} >Текст подзаголовка</Input>
		<Textarea parentClass="lib-header-1-contents" {...mainText.bind}>Основной текст</Textarea>

		<UploadImages parentClass="lib-header-1-contents" images={images} >Изображения галереи</UploadImages>

			<SecondaryButton 
				parentClass="lib-header-1-contents" 
				handler={() => {}} 
			>
				Применить настройки
			</SecondaryButton>
			
		</div>
	)
}

export default Header1Contents