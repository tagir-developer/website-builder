import React from 'react'
import './styles/Menu1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import { IMenu1Content } from './types/menu1types'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import SmallIconButton from '../../../UI/SmallIconButton/SmallIconButton'
import AddMenuItemCard from '../../../UI/AddMenuItemCard/AddMenuItemCard'
import { useAddMenuItem } from '../../../../hooks/useAddMenuItem.hook'

interface IMenu1ContentsProps {
	parentClass?: string
	modClass?: string[]
	closePopup: Function
	blockContent: IMenu1Content
}

const Menu1Contents: React.FC<IMenu1ContentsProps> = ({ parentClass, closePopup, blockContent }) => {

	const classes = useCreateClassName('lib-menu-1-contents', parentClass)

	const { activePage } = useTypedSelector(state => state.page)
	const { changeBlockContent, saveBlocksInDB } = useActions()
	const menu = useAddMenuItem(blockContent.menuItems)

	const createNewContentObject = (): IMenu1Content => {
		return {
			menuItems: menu.menuItems
		}
	}

	const saveNewContent = () => {
		changeBlockContent(createNewContentObject())
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	return (
		<div className={classes}>
			<SmallIconButton
				parentClass="lib-menu-1-contents"
				modClass={['add-icon']}
				handler={menu.addMenuItemHandler}
			>
				Добавить пункт меню
			</SmallIconButton>

			{
				menu.menuItems.map((i, index) => {
					return (
						<AddMenuItemCard
							key={index}
							parentClass="lib-menu-1-contents"
							id={index}
							title={i.title}
							link={i.link}
							select={menu.projectPages}
							deleteHandler={menu.deleteMenuItemHandler}
							changeInputHandler={menu.changeInputHandler}
							changeSelectHandler={menu.changeSelectHandler}
						/>
					)
				})
			}

			<SecondaryButton
				parentClass="lib-menu-1-contents"
				handler={saveNewContent}
			>
				Применить настройки
			</SecondaryButton>
		</div>
	)
}

export default Menu1Contents