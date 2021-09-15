import React from 'react'
import './styles/Form1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IForm1Content } from './types/form1types'

interface IForm1ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IForm1Content
}

const Form1Contents: React.FC<IForm1ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-form-1-contents', parentClass)

	const {activePage} = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	const title = useInput(blockContent.titleText)
	const description = useInput(blockContent.descriptionText)
	const button = useInput(blockContent.buttonText)

	const newBlockContent: IForm1Content = {
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

export default Form1Contents