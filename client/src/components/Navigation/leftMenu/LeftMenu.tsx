import React from 'react'
import './LeftMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'

interface ILeftMenu {
	parentClass?: string
	modClass?: string[]
	closeButton?: boolean
}

const LeftMenu: React.FC<ILeftMenu> = ({ parentClass, modClass, closeButton }) => {

	const leftMenuClasses = useCreateClassName('left-menu', parentClass, modClass)

	return (
		<div className={leftMenuClasses}>
		<div className="left-menu__title">Справка</div>
		<div className="left-menu__devider"></div>
		{ closeButton ? <div className="left-menu__close-button"></div> : null }
		<NavLink to="/help/start" className="left-menu__item" activeClassName="left-menu__item_active">Начало работы</NavLink>
		<NavLink to="/help/second" className="left-menu__item">Как создать сайт</NavLink>
		<NavLink to="/help/start" className="left-menu__item">Как создать страницу сайта</NavLink>
		</div>
	)
}

export default LeftMenu