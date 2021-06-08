import React, { useState } from 'react'
import './ChooseTemplateMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'

interface IChooseTemplateMenu {
	parentClass?: string
	modClass?: string[]
}

const ChooseTemplateMenu: React.FC<IChooseTemplateMenu> = ({ parentClass, modClass }) => {

	const chooseTemplateMenuClasses = useCreateClassName('choose-template-menu', parentClass, modClass)

	const [activeItem, setActiveItem] = useState<number>(0)

	const menuItems: string[] = ['Все шаблоны', 'Визитка', 'Магазин', 'Бизнес']

	const itemHandler = (index: number) => {
		setActiveItem(index)
		// ? Здесь будем запрашивать из базы данных и выводить нужные карточки
	}

	return (
		<ul className={chooseTemplateMenuClasses}>
			{menuItems.map((i, index) => {
				return (
					<li
						key={index}
						className={index === activeItem ? "choose-template-menu__item choose-template-menu__item_active" : "choose-template-menu__item"}
						onClick={() => itemHandler(index)}
					>
						{i}
					</li>
				)
			})}
		</ul>
	)
}

export default ChooseTemplateMenu