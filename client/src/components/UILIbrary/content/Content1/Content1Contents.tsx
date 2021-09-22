import React from 'react'
import './styles/Content1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { IContent1Content } from './types/content1types'

interface IContent1ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IContent1Content
}

const Content1Contents: React.FC<IContent1ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-content-1-contents', parentClass)

	const { activePage } = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()

	const title = useInput(blockContent.titleText)
	const content = useInput(blockContent.contentText)

	const createBlockContentObject = {
		titleText: title.value,
		contentText: content.value,
	}

	const saveNewContent = () => {
		changeBlockContent(createBlockContentObject)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>
			<Input
				parentClass="lib-content-1-contents"
				modClass={['align-left']}
				type="text"
				{...title.bind}
			>
				Текст заголовка
			</Input>
			<Textarea
				parentClass="lib-content-1-contents"
				{...content.bind}
			>
				Основной контент
			</Textarea>
			<SecondaryButton
				parentClass="lib-content-1-contents"
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Content1Contents