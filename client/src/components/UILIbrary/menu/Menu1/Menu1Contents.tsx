import React from 'react'
import './styles/Menu1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'
import { IMenu1Content } from './types/menu1types'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'

interface IMenu1ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IMenu1Content
}

const Menu1Contents: React.FC<IMenu1ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-menu-1-contents', parentClass)

	const {activePage} = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	// const title = useInput(blockContent.titleText)
	// const description = useInput(blockContent.descriptionText)
	// const button = useInput(blockContent.buttonText)

	// const newBlockContent: IMenu1Content = {
	// 	titleText: title.value,
	// 	descriptionText: description.value,
	// 	buttonText: button.value
	// }

	// const saveNewContent = () => {
	// 	changeBlockContent(newBlockContent)
	// 	if (activePage.autosavePage) saveBlocksInDB()
	// 	closePopup()
	// }

	return (
		<div className={classes}>
			{/* <Input
				parentClass="lib-menu-1-contents"
				modClass={['align-left']}
				type="text"
				{...title.bind}
			>
				Текст заголовка
			</Input>
			<Textarea
				parentClass="lib-menu-1-contents"
				{...description.bind}
			>
				Текст описания
			</Textarea>
			<Input
				parentClass="lib-menu-1-contents"
				modClass={['align-left']}
				type="text"
				{...button.bind}
			>
				Текст кнопки
			</Input>

			<SecondaryButton
				parentClass="lib-menu-1-contents"
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton> */}
		</div>
	)
}

export default Menu1Contents