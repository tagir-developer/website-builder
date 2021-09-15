import { useCallback, useState } from "react"
import { IMenuItem } from '../components/UILIbrary/menu/Menu1/types/menu1types'
import { useTypedSelector } from "./reduxHooks"
import { IOptions } from './useSelect.hook'

interface IUseAddMenuItem {
	addMenuItemHandler: () => void
	deleteMenuItemHandler: (id: number) => void
	menuItems: IMenuItem[]
	projectPages: IOptions[]
	changeInputHandler: (id: number, event: React.FormEvent & { target: HTMLInputElement }) => void
	changeSelectHandler: (id: number, event: React.FormEvent & { target: HTMLSelectElement }) => void
}

export const useAddMenuItem = (initialItems: IMenuItem[]): IUseAddMenuItem => {

	const { pages } = useTypedSelector(state => state.page)
	const { activeProject } = useTypedSelector(state => state.projects)

	const projectPagesInitial = useCallback(() => { // ? Возможно лучше использовать UseMemo
		return pages.map(page => {
			return {
				value: page.isHomePage ? '/' + activeProject.link : '/' + activeProject.link + '/' + page.link,
				label: page.name
			}
		})
	}, [pages, activeProject])

	const [projectPages, setProjectPages] = useState<IOptions[]>(projectPagesInitial)


	const firstBlockUsingFilter = (initialMenuItems: IMenuItem[]): IMenuItem[] => {
		const isFirstUsing = initialMenuItems.find(i => i.link === '/')
		if (!isFirstUsing) return initialMenuItems
		let newInitialItems = initialMenuItems.map(i => {
			return {...i}
		})
		newInitialItems.forEach(i => i.link = '/' + activeProject.link)
		return newInitialItems
	}

	const [menuItems, setMenuItems] = useState<IMenuItem[]>(firstBlockUsingFilter(initialItems))

	const addMenuItemHandler = (): void => {

		if (menuItems.length === 4) return

		setMenuItems(prev => [...prev, {
			title: 'Пункт ' + (menuItems.length + 1),
			link: '/',
		}])
	}

	const deleteMenuItemHandler = (id: number): void => {
		setMenuItems(prev => {
			const prevClone = prev.map(i => {
				return { ...i }
			})
			const newState = prevClone.filter((i, index) => index !== id)
			return newState
		})
	}

	const changeInputHandler = (id: number, event: React.FormEvent & { target: HTMLInputElement }): void => {
		setMenuItems(prev => {
			const prevClone = prev.map(i => {
				return { ...i }
			})
			prevClone[id].title = event.target.value
			return prevClone
		})
	}

	const changeSelectHandler = (id: number, event: React.FormEvent & { target: HTMLSelectElement }): void => {
		setMenuItems(prev => {
			const prevClone = prev.map(i => {
				return { ...i }
			})
			prevClone[id].link = event.target.value
			return prevClone
		})
	}

	return {
		addMenuItemHandler,
		deleteMenuItemHandler,
		menuItems,
		projectPages,
		changeInputHandler,
		changeSelectHandler
	}

}