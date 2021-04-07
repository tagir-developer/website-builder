import React from 'react'
import './HorizontalNav.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'

interface IHorizontalNav {
	parentClass?: string
	modClass?: string[]
}

const HorizontalNav: React.FC<IHorizontalNav> = ({ parentClass, modClass }) => {

	const classes = useCreateClassName('horizontal-nav', parentClass, modClass)
	const itemClasses = useCreateClassName('horizontal-nav__item', null, modClass)

	return (
		<div className={classes}>
			<ul className="horizontal-nav__list">
				<li className={itemClasses}>
					<a href="/" className="horizontal-nav__link">Регистрация</a>
				</li>
				<li className={itemClasses}>
					<a href="/" className="horizontal-nav__link horizontal-nav__link_bold">Войти</a>
				</li>
			</ul>
		</div>
	)
}

export default HorizontalNav