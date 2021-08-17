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

type blocksTypes = 'header' | 'form' | 'gallery'

interface IMenuItem {
	title: string
	type: blocksTypes
}

const BlocksMenu: React.FC<IBlocksMenu> = ({ parentClass, modClass, popup, header }) => {

	const blocksMenuClasses = useCreateClassName('blocks-menu', parentClass, modClass)

	const [activeItem, setActiveItem] = useState<number | null>(null)

	// const menuItems: string[] = ['Шапки сайта', 'Кнопка', 'Форма', 'Галерея', 'Услуги', 'Преимущества', 'Меню']
	const menuItems: IMenuItem[] = [
		{
			title: 'Шапки сайта',
			type: 'header'
		},
		{
			title: 'Формы',
			type: 'form'
		},
		{
			title: 'Галереи',
			type: 'gallery'
		}
	]

	const itemHandler = (index: number, blockType: blocksTypes) => {
		setActiveItem(index)
		// ? Здесь будем запрашивать из базы данных и выводить нужные карточки? либо записывать в редакс тип, по которому в блоке selection запрашивать список нужных блоков
		popup && popup.switchPopup()
	}

	useEffect(() => {
		if (popup && popup.popupClosed) {
			setActiveItem(null)
		}
	}, [popup])


	return (
		<div className={blocksMenuClasses}>

			{header && <TitleWithCloseBtn title={header.title} closeHandler={header.closeHandler} />}

			{menuItems.map((i, index) => {
				return (
					<div
						key={index}
						className={index === activeItem ? "blocks-menu__item blocks-menu__item_active" : "blocks-menu__item"}
						onClick={() => itemHandler(index, i.type)}
					>
						{i.title}
					</div>
				)
			})}
		</div>
	)
}

export default BlocksMenu