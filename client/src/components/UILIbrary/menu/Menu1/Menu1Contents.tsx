import React, { useState } from 'react'
import './styles/Menu1Contents.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import SecondaryButton from '../../../UI/SecondaryButton/SecondaryButton'
import Input from '../../../UI/Input/Input'
import Textarea from '../../../UI/Textarea/Textarea'
import { useInput } from '../../../../hooks/useInput.hook'
import { IMenu1Content, IMenuItem } from './types/menu1types'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import SmallIconButton from '../../../UI/SmallIconButton/SmallIconButton'
import AddMenuItemCard from '../../../UI/AddMenuItemCard/AddMenuItemCard'
import { IOptions } from '../../../../hooks/useSelect.hook'

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

	const [projectPages, setProjectPages] = useState<IOptions[]>([
		{
			value: 'page-1',
			label: 'Апельсин - стр 1'
		},
		{
			value: 'page-2',
			label: 'О нас'
		}
	])


	const [menuItems, setMenuItems] = useState<IMenuItem[]>([
		{
			title: 'Пункт 1',
			link: '/',
		},
		{
			title: 'Пункт 2',
			link: '/',
		}
	])

	const addMenuItemHandler = () => {

		if (menuItems.length === 4) return

		setMenuItems(prev => [...prev, {
			title: 'Пункт ' + (menuItems.length + 1),
			link: '/',
		}])
	}

	const deleteMenuItemHandler = (id: number): void => {
		setMenuItems(prev => {
			const prevClone = prev.filter((i, index) => index !== id)
			return prevClone
		})
	}

	const saveMenuItemChanges = (id: number, inputValue: string, selectValue: string): void => {
		setMenuItems(prev => {
			const prevClone = prev.map(i => {
				return { ...i }
			})
			prevClone[id].title = inputValue
			prevClone[id].link = selectValue
			return prevClone
		})
	}

	const newContentObject: IMenu1Content = {
		menuItems: menuItems
	}

	const saveNewContent = () => {
		changeBlockContent(newContentObject)
		if (activePage.autosavePage) saveBlocksInDB()
		closePopup()
	}

	console.log('Изменение стейта', menuItems)

	return (
		<div className={classes}>
			<SmallIconButton
				parentClass="lib-menu-1-contents"
				modClass={['add-icon']}
				handler={addMenuItemHandler}
			>
				Добавить пункт меню
			</SmallIconButton>

			{
				menuItems.map((i, index) => {
					return (
						<AddMenuItemCard
							key={index}
							id={index}
							parentClass="lib-menu-1-contents"
							title={i.title}
							link={i.link}
							select={projectPages}
							changeHandler={saveMenuItemChanges}
							deleteHandler={deleteMenuItemHandler}
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