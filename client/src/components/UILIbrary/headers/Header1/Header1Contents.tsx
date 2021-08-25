import React from 'react'
import './styles/Header1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import UploadImages from '../../../UI/UploadImages/UploadImages'
import { useInput } from '../../../../hooks/useInput.hook'
import img1 from './testImages/img1.jpg'
import img2 from './testImages/img2.jpg'
import { IHeader1Content } from './types/header1types'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'

interface IHeader1ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IHeader1Content
}

const Header1Contents: React.FC<IHeader1ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-header-1-contents', parentClass)

	const {activePage} = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	const title = useInput(blockContent.titleText)
	const description = useInput(blockContent.descriptionText)
	const button = useInput(blockContent.buttonText)

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

	const newBlockContent: IHeader1Content = {
		titleText: title.value,
		descriptionText: description.value,
		buttonText: button.value
	}

	const saveNewContent = () => {

		changeBlockContent(newBlockContent)

		if (activePage.autosavePage) saveBlocksInDB()

		closePopup()
	}

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
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Header1Contents