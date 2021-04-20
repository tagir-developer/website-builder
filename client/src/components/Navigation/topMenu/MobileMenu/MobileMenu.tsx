import React, { useState } from 'react'
import './MobileMenu.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

interface IItems {
	title: string
	link: string
	bold: boolean
}

interface IMobileMenu {
	parentClass?: string
	modClass?: string[]
	items: Array<IItems>
}

const MobileMenu: React.FC<IMobileMenu> = ({ parentClass, modClass, items }) => {

	const [isOpen, isOpenHandler] = useState<boolean>(false)

	const navClasses = useCreateClassName('mobile-nav', parentClass, modClass)

	const toggleClasses = classNames({
		'mobile-nav__toggle': true,
		'mobile-nav__toggle_open': isOpen,
		'mobile-nav__toggle_dark-theme': modClass && modClass.includes('dark-theme')
	})

	const barClasses = classNames({
		'mobile-nav__bar': true,
		'mobile-nav__bar_open': isOpen
	})

	return (
		<div className={navClasses}>

			<div onClick={() => isOpenHandler(prev => !prev)} className={toggleClasses}></div>

			<ul className={barClasses}>
			{items.map((item, i) => {
					return (
						<li key={i} className="mobile-nav__item">
							<NavLink 
								to={item.link} 
								className="mobile-nav__link"
							>
								{item.title}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default MobileMenu