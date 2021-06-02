import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ShowMenuBtn.scss'

interface IShowMenuBtn {
	parentClass?: string
	modClass?: string[]
	items: {
		title: string
		handler: (param?: any) => any
	}[]
}

const ShowMenuBtn: React.FC<IShowMenuBtn> = ({ parentClass, modClass, items }) => {

	const [isOpen, isOpenHandler] = useState<boolean>(false)

	const ShowMenuBtnClasses = useCreateClassName('show-menu-btn', parentClass, modClass)

	const showMenuRef = useRef() as MutableRefObject<HTMLDivElement>


	useEffect(() => {

		const closeMenuWhenClickOutside = (event: MouseEvent): void => {
			if (event.target !== showMenuRef.current) isOpenHandler(false)
		}

		document.addEventListener('click', closeMenuWhenClickOutside)

		return () => {
			document.removeEventListener('click', closeMenuWhenClickOutside)
		}

	}, [])

	const toggleHandler = () => isOpenHandler(prev => !prev)

	const openSetting = (e: React.MouseEvent<HTMLLIElement>, itemHandler: (param?: any) => any) => {
		e.preventDefault()
		e.stopPropagation()
		// Открываем конфигурационные настройки в новой странице или иначе
		isOpenHandler(false)
		itemHandler()
	}



	return (
		<>
			<div
				className={ShowMenuBtnClasses}
				onClick={toggleHandler}
				
			>
				<div className="show-menu-btn__menu">
					<CSSTransition
						in={isOpen}
						timeout={400}
						classNames="show-menu-btn__menu-list_show"
						mountOnEnter
						unmountOnExit
					>
						<ul className="show-menu-btn__menu-list" >

						{items && items.map((i, index) => {
							return (
								<li 
									key={'menu-list-item' + index}
									className="show-menu-btn__menu-list-item" 
									onClick={e => openSetting(e, i.handler)}
								>
									{i.title}
								</li>
							)
						})}

						</ul>
					</CSSTransition>
				</div>

				<div className="show-menu-btn__icon" ref={showMenuRef}></div>
			</div>
		</>
	)
}

export default ShowMenuBtn