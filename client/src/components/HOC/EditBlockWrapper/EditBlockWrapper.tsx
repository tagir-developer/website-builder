import React from 'react'
import './EditBlockWrapper.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import BlockActionButtons from '../../UI/BlockActionButtons/BlockActionButtons'
import BlockMoveBtn from '../../UI/BlockMoveBtn/BlockMoveBtn'
import { useState } from 'react'

interface IEditBlockWrapper {
	parentClass?: string
	modClass?: string[]
}

const EditBlockWrapper: React.FC<IEditBlockWrapper> = ({ children, parentClass, modClass }) => {

	const blockWrapperClasses = useCreateClassName("edit-block-wrapper", parentClass, modClass)

	const [hovered, setHovered] = useState<boolean>(false)

	const mouseOverHandler = () => {
		setHovered(true)
		// ! Здесь необходимо в глобальном стейте записать blockId блока, с которым работаем
	}

	const mouseLeaveHandler = () => {
		setHovered(false)
		// ! Здесь необходимо в глобальном стейте снять blockId блока, с которым работаем
	}


	const isHide = false

	const items = [
		{
			title: 'Настройки',
			iconType: 'config',
			handler: () => { }
		},
		{
			title: 'Редактировать',
			iconType: 'edit',
			handler: () => { }
		},
		{
			title: 'Дублировать',
			iconType: 'copy',
			handler: () => { }
		},
		{
			title: 'Удалить',
			iconType: 'delete',
			handler: () => { }
		},
		{
			title: isHide ? 'Показать' : 'Скрыть',
			iconType: isHide ? 'show' : 'hide',
			handler: () => { }
		},
	]

	return (
		<div
			className={blockWrapperClasses}
			onMouseOver={mouseOverHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{hovered && <>
				<div className="edit-block-wrapper__green-light"></div>
				<BlockActionButtons parentClass="edit-block-wrapper" items={items} />
				<BlockMoveBtn parentClass="edit-block-wrapper" handler={() => { }} />
			</>}

			{children}
		</div>
	)
}

export default EditBlockWrapper