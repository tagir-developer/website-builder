import React from 'react'
import './styles/Form1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
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

	const { activePage } = useTypedSelector(state => state.page)
	const { activeBlock } = useTypedSelector(state => state.block)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	const titleText = useInput(blockContent.titleText)
	const firstInput = useInput(blockContent.firstInputText)
	const secondInput = useInput(blockContent.secondInputText)
	const buttonText = useInput(blockContent.buttonText)
	const formName = useInput(blockContent.formName ? blockContent.formName : "Форма блока с id:" + activeBlock.blockId )

	const newBlockContent: IForm1Content = {
		titleText: titleText.value,
		firstInputText: firstInput.value,
		secondInputText: secondInput.value,
		buttonText: buttonText.value,
		formName: formName.value
	}

	const saveNewContent = () => {
		changeBlockContent(newBlockContent)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>
			<Input
				parentClass="lib-form-1-contents"
				modClass={['align-left']}
				type="text"
				{...titleText.bind}
			>
				Текст заголовка
			</Input>
			<Input
				parentClass="lib-form-1-contents"
				modClass={['align-left']}
				type="text"
				{...firstInput.bind}
			>
				Текст поля №1
			</Input>			
			<Input
				parentClass="lib-form-1-contents"
				modClass={['align-left']}
				type="text"
				{...secondInput.bind}
			>
				Текст поля №2
			</Input>
			<Input
				parentClass="lib-form-1-contents"
				modClass={['align-left']}
				type="text"
				{...buttonText.bind}
			>
				Текст кнопки
			</Input>
			<Input
				parentClass="lib-form-1-contents"
				modClass={['align-left']}
				type="text"
				{...formName.bind}
			>
				Название формы
			</Input>

			<SecondaryButton
				parentClass="lib-form-1-contents"
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Form1Contents