import classNames from 'classnames'
import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './MenuToggle.scss'

interface IMenuToggle {
	parentClass?: string
	modClass?: string[]
	handler?: () => void
}

const MenuToggle: React.FC<IMenuToggle> = ({parentClass, modClass, handler}) => {

	const menuToggleClasses = useCreateClassName('menu-toggle', parentClass, modClass)

	const toggleClasses = classNames({
		'menu-toggle__icon': true,
	})

	const toggleHandler = () => {
		if (handler) handler()
	}

	return (
		<div 
			className={menuToggleClasses}
			onClick={toggleHandler}
		>
			<div className={toggleClasses}></div>
		</div>
	)
}

export default MenuToggle