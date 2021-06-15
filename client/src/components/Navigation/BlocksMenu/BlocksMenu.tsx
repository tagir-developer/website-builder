import React, { useEffect, useState } from 'react'
import './BlocksMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import TitleWithCloseBtn from '../../UI/TitleWithCloseBtn/TitleWithCloseBtn'

interface IBlocksMenu {
	parentClass?: string
	modClass?: string[]
	closeButton?: boolean
	title?: string
	popup?: {
		popupClosed: boolean
		switchPopup: () => void
	}
	header?: {
		title: string
		closeHandler: (param?: any) => void
	}
}

const BlocksMenu: React.FC<IBlocksMenu> = ({ parentClass, modClass, popup, header }) => {

	const blocksMenuClasses = useCreateClassName('blocks-menu', parentClass, modClass)

	const [activeItem, setActiveItem] = useState<number | null>(null)

	const menuItems: string[] = ['Текстовый блок', 'Кнопка', 'Форма', 'Галерея', 'Услуги', 'Преимущества', 'Меню']

	const itemHandler = (index: number) => {
		setActiveItem(index)
		// ? Здесь будем запрашивать из базы данных и выводить нужные карточки
		popup && popup.switchPopup()
	}

	useEffect(() => {

		if (popup && popup.popupClosed) {
			setActiveItem(null)
		}

	}, [popup])


	return (
		<div className={blocksMenuClasses}>

			{ header && <TitleWithCloseBtn title={header.title} closeHandler={header.closeHandler} /> }

			{menuItems.map((i, index) => {
				return (
					<div
						key={index}
						className={index === activeItem ? "blocks-menu__item blocks-menu__item_active" : "blocks-menu__item"}
						onClick={() => itemHandler(index)}
					>
						{i}
					</div>
				)
			})}
		</div>
	)
}

export default BlocksMenu