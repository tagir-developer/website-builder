import React from 'react'
import './HorizontalNav.scss'

interface IHorizontalNav {
	parentClass?: string
}

const HorizontalNav: React.FC<IHorizontalNav> = ({ parentClass }) => {

	const classes: string[] = [
		"horizontal-nav"
	]

	if (parentClass) {
		classes.push(parentClass + "__horizontal-nav")
	}

	return (
		<div className={classes.join(' ')}>
			<ul className="horizontal-nav__list">
				<li className="horizontal-nav__item">
					<a href="/" className="horizontal-nav__link">Регистрация</a>
				</li>
				<li className="horizontal-nav__item">
					<a href="/" className="horizontal-nav__link horizontal-nav__link_bold">Войти</a>
				</li>
			</ul>
		</div>
	)
}

export default HorizontalNav