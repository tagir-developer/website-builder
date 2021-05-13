import React from 'react'
import './LeftMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'

interface ILeftMenu {
	parentClass?: string
	modClass?: string[]
}

const LeftMenu: React.FC<ILeftMenu> = ({ parentClass, modClass }) => {

	const leftMenuClasses = useCreateClassName('left-menu', parentClass, modClass)

	return (
		<div className={leftMenuClasses}>
		<NavLink to="/" className="left-menu__item">Начало работы</NavLink>
		<NavLink to="/" className="left-menu__item">Как создать сайт</NavLink>
		<NavLink to="/" className="left-menu__item">Как создать страницу сайта</NavLink>
		</div>
	)
}

export default LeftMenu