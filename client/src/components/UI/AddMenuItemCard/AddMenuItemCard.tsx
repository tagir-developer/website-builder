import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { IOptions } from '../../../hooks/useSelect.hook'
import Input from '../Input/Input'
import WideSelect from '../WideSelect/WideSelect'
import './AddMenuItemCard.scss'

interface IAddMenuItemCard {
	parentClass?: string
	modClass?: string[]
	title: string
	link: string
	select: IOptions[]
	id: number
	deleteHandler: (id: number) => void
	changeInputHandler: (id: number, event: React.FormEvent & { target: HTMLInputElement }) => void
	changeSelectHandler: (id: number, event: React.FormEvent & { target: HTMLSelectElement }) => void
}

const AddMenuItemCard: React.FC<IAddMenuItemCard> = ({ parentClass, modClass, title, link, select, id, deleteHandler, changeInputHandler, changeSelectHandler }) => {

	const addMenuItemCardClasses = useCreateClassName('add-menu-item-card', parentClass, modClass)

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
				value={title}
				onChange={(e) => changeInputHandler(id, e)}
			>
				Имя пункта меню
			</Input>

			<WideSelect
				parentClass="lib-header-2-configs"
				value={link}
				onChange={(e) => changeSelectHandler(id, e)}
				options={select}
			>
				Выберите страницу
			</WideSelect>

		</div>
	)
}

export default AddMenuItemCard