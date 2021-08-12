import React, { useState } from 'react'
import './ChooseTemplateMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useActions } from '../../../hooks/reduxHooks'

interface IChooseTemplateMenu {
	parentClass?: string
	modClass?: string[]
}

interface IMenuItems {
	title: string
	type: 'all' | 'business-card' | 'business' | 'another'
}

const ChooseTemplateMenu: React.FC<IChooseTemplateMenu> = ({ parentClass, modClass }) => {

	const chooseTemplateMenuClasses = useCreateClassName('choose-template-menu', parentClass, modClass)

	const [activeItem, setActiveItem] = useState<number>(0)
	const {getTemplatesWithType, getAllTemplates} = useActions()

	const menuItems: IMenuItems[] = [
		{
			title: 'Все шаблоны',
			type: 'all'
		},
		{
			title: 'Визитка',
			type: 'business-card'
		},
		{
			title: 'Бизнес',
			type: 'business'
		},
		{
			title: 'Разное',
			type: 'another'
		}
	]

	const itemHandler = (templateType: string, index: number) => {

		setActiveItem(index)

		if (templateType === 'all') {
			getAllTemplates()
		} else {
			getTemplatesWithType(templateType)
		}
		// templateType ? getTemplatesWithType(templateType) : getAllTemplates()
		// ? Здесь будем запрашивать из базы данных и выводить нужные карточки
	}

	return (
		<ul className={chooseTemplateMenuClasses}>
			{menuItems.map((i, index) => {
				return (
					<li
						key={index}
						className={index === activeItem ? "choose-template-menu__item choose-template-menu__item_active" : "choose-template-menu__item"}
						onClick={() => itemHandler(i.type, index)}
					>
						{i.title}
					</li>
				)
			})}
		</ul>
	)
}

export default ChooseTemplateMenu