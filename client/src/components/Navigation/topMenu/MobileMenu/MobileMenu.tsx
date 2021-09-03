import React, { MouseEventHandler, useState } from 'react'
import './MobileMenu.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import Toggle from '../../../UI/Toggle/Toggle'
import { useActions, useTypedSelector } from '../../../../hooks/reduxHooks'
import { useCheck } from '../../../../hooks/useCheck.hook'

interface IItems {
	title: string
	link: string
	bold: boolean
	handler?: MouseEventHandler<HTMLLIElement>
}

interface IMobileMenu {
	parentClass?: string
	modClass?: string[]
	items: Array<IItems>
	autosaveCheker?: boolean
}

const MobileMenu: React.FC<IMobileMenu> = ({ parentClass, modClass, items, autosaveCheker = false }) => {

	const [isOpen, isOpenHandler] = useState<boolean>(false)

	const navClasses = useCreateClassName('mobile-nav', parentClass, modClass)

	const { activePage } = useTypedSelector(state => state.page)
	const { switchPageAutosave } = useActions()

	const toggleClasses = classNames({
		'mobile-nav__toggle': true,
		'mobile-nav__toggle_open': isOpen,
		'mobile-nav__toggle_dark-theme': modClass && modClass.includes('dark-theme')
	})

	const barClasses = classNames({
		'mobile-nav__bar': true,
		'mobile-nav__bar_open': isOpen
	})

	const autosaveElement = (
		<div className="mobile-nav__autosave-switcher-panel autosave-switcher-panel">
			<Toggle
				name="mob-menu-toggle"
				parentClass="autosave-switcher-panel"
				value={activePage.autosavePage}
				handler={() => switchPageAutosave(!activePage.autosavePage)}
			/>
			<div className="autosave-switcher-panel__name">Включить автосохранение</div>
		</div>
	)

	return (
		<div className={navClasses}>

			<div onClick={() => isOpenHandler(prev => !prev)} className={toggleClasses}></div>

			<div className={barClasses}>

				{autosaveCheker ? autosaveElement : null}

				<ul className="mobile-nav__list">
					{items.map((item, i) => {
						return (
							<li
								key={i}
								className="mobile-nav__item"
								onClick={item.handler ? item.handler : () => { }}
							>
								{item.handler
									? <div
										className="mobile-nav__link"
									>
										{item.title}
									</div>
									: <NavLink
										to={item.link}
										className="mobile-nav__link"
									>
										{item.title}
									</NavLink>
								}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu