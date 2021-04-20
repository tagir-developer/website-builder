import React from 'react'
import './HorizontalNav.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'

interface IItems {
	title: string
	link: string
	bold: boolean
}

interface IHorizontalNav {
	parentClass?: string
	modClass?: string[]
	items: Array<IItems>
}

const HorizontalNav: React.FC<IHorizontalNav> = ({ parentClass, modClass, items }) => {

	const classes = useCreateClassName('horizontal-nav', parentClass, modClass)
	const itemClasses = useCreateClassName('horizontal-nav__item', null, modClass)

	return (
		<div className={classes}>

		<MobileMenu items={items} parentClass="horizontal-nav" />
		{/* <MobileMenu items={items} parentClass="horizontal-nav" modClass={['dark-theme']} /> */}

			<ul className="horizontal-nav__list">
			{items.map((item, i) => {
					return (
						<li key={i} className={itemClasses}>
							<NavLink 
								to={item.link} 
								className={item.bold 
									? "horizontal-nav__link horizontal-nav__link_bold"
									: "horizontal-nav__link"
								}
							>{item.title}</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default HorizontalNav