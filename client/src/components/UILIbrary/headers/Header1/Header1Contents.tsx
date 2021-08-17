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

	const title = useInput('Заголовок блока')
	const description = useInput('Какой-то текст описывающий свойства продукта или услуги')
	const button = useInput('Кнопка')

	// const images = [
	// 	{
	// 		id: '4646456',
	// 		imgPath: './img/test.jpg',
	// 		img: img1
	// 	},
	// 	{
	// 		id: '1231312',
	// 		imgPath: './img/test2.jpg',
	// 		img: img2
	// 	},
	// ]

	return (
		<div className={classes}>
			<Input
				parentClass="lib-header-1-contents"
				modClass={['align-left']}
				type="text"
				{...title.bind}
			>
				Текст заголовка
			</Input>
			<Textarea
				parentClass="lib-header-1-contents"
				{...description.bind}
			>
				Текст описания
			</Textarea>
			<Input
				parentClass="lib-header-1-contents"
				modClass={['align-left']}
				type="text"
				{...button.bind}
			>
				Текст кнопки
			</Input>

			{/* <UploadImages parentClass="lib-header-1-contents" images={images} >Изображения галереи</UploadImages> */}

			<SecondaryButton
				parentClass="lib-header-1-contents"
				handler={() => { }}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Header1Contents