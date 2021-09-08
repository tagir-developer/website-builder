import React from 'react'
import './styles/Header2Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'
import { IHeader2Content } from './types/header2types'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import ImageUploader from '../../../UI/ImageUploader/ImageUploader'
import { useUploadFiles } from '../../../../hooks/useUploadFiles.hook'

interface IHeader2ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IHeader2Content
}

const Header2Contents: React.FC<IHeader2ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-header-2-contents', parentClass)

	const { activePage } = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	const title = useInput(blockContent.titleText)
	const description = useInput(blockContent.descriptionText)
	const button = useInput(blockContent.buttonText)
	const upload = useUploadFiles('header-2-content')

	const newBlockContent: IHeader2Content = {
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
				parentClass="lib-header-2-contents"
				modClass={['align-left']}
				type="text"
				{...title.bind}
			>
				Текст заголовка
			</Input>
			<Textarea
				parentClass="lib-header-2-contents"
				{...description.bind}
			>
				Текст описания
			</Textarea>
			<Input
				parentClass="lib-header-2-contents"
				modClass={['align-left']}
				type="text"
				{...button.bind}
			>
				Текст кнопки
			</Input>

			<ImageUploader
				parentClass="lib-header-2-contents"
				buttonText="Загрузить фото"
				// multiple={true}
				{...upload.bind}
			>
				Изображения галереи
			</ImageUploader>

			<SecondaryButton
				parentClass="lib-header-2-contents"
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Header2Contents