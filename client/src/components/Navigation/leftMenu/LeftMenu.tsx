import React from 'react'
import './LeftMenu.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'

interface ILeftMenu {
	parentClass?: string
	modClass?: string[]
	closeButton?: boolean
	title?: string
}

const LeftMenu: React.FC<ILeftMenu> = ({ parentClass, modClass, closeButton, title }) => {

	const leftMenuClasses = useCreateClassName('left-menu', parentClass, modClass)

	return (
		<div className={leftMenuClasses}>
		<div className="left-menu__title">{title}</div>
		<div className="left-menu__devider"></div>
		{ closeButton 
			? <div className="left-menu__close-button"></div> 
			: null 
		}
		<NavLink to="/help" className="left-menu__item" activeClassName="left-menu__item_active" exact >Начало работы</NavLink>
		<NavLink to="/help/two" className="left-menu__item" activeClassName="left-menu__item_active">Как создать сайт</NavLink>
		<NavLink to="/help/three" className="left-menu__item" activeClassName="left-menu__item_active">Как создать страницу сайта</NavLink>
		<NavLink to="/help/four" className="left-menu__item" activeClassName="left-menu__item_active">Как использовать готовые шаблоны</NavLink>
		<NavLink to="/help/five" className="left-menu__item" activeClassName="left-menu__item_active">Как изменить сайт</NavLink>
		<NavLink to="/help/six" className="left-menu__item" activeClassName="left-menu__item_active">Как привязать домен</NavLink>
		<NavLink to="/help/seven" className="left-menu__item" activeClassName="left-menu__item_active">Как подключить счетчики аналитики</NavLink>
		</div>
	)
}

export default LeftMenu