import React, { useEffect } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useCheck } from '../../../hooks/useCheck.hook'
import { useInput } from '../../../hooks/useInput.hook'
import { IOptions, useSelect } from '../../../hooks/useSelect.hook'
import Checkbox from '../Checkbox/Checkbox'
import Input from '../Input/Input'
import WideSelect from '../WideSelect/WideSelect'
import './AddMenuItemCard.scss'

interface IAddMenuItemCard {
	parentClass?: string
	modClass?: string[]
	title: string
	link: string
	openInNewWindow?: boolean
	select: IOptions[]
	id: number
	changeHandler: (id: number, inputValue: string, selectValue: string) => void
	deleteHandler: (id: number) => void
}

const AddMenuItemCard: React.FC<IAddMenuItemCard> = ({ parentClass, modClass, title, link, openInNewWindow, select, id, changeHandler, deleteHandler }) => {

	const addMenuItemCardClasses = useCreateClassName('add-menu-item-card', parentClass, modClass)

	const menuTitle = useInput(title)
	// const menuLink = useInput(link)
	// const openInNewWindowCheckbox = useCheck(openInNewWindow)
	const choosePage = useSelect(select, link)

	useEffect(() => {
		changeHandler(id, menuTitle.value, choosePage.value)
	// eslint-disable-next-line
	}, [menuTitle.value, choosePage.value])

	return (
		<div className={addMenuItemCardClasses}>

		<div 
			className="add-menu-item-card__delete-btn"
			onClick={() => deleteHandler(id)}
		></div>

			<Input
				parentClass="add-menu-item-card"
				modClass={['align-left']}
				type="text"
				// placeholder="Имя пункта меню"
				{...menuTitle.bind}
			>
				Имя пункта меню
			</Input>

			<WideSelect
				parentClass="lib-header-2-configs"
				{...choosePage.bind}
			>
				Выберите страницу
			</WideSelect>
			{/* <Input
				parentClass="add-menu-item-card"
				type="text"
				placeholder="Укажите ссылку"
				{...menuLink.bind}
			/> */}
			{/* <Checkbox
				parentClass="add-menu-item-card"
				{...openInNewWindowCheckbox.bind}
			>
				Открывать в новом окне
			</Checkbox> */}
		</div>
	)
}

export default AddMenuItemCard