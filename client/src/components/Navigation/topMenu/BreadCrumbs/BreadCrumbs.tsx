import React from 'react'
import './BreadCrumbs.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'

interface IItems {
	title: string
	link: string
}

interface IBreadCrumbsProps {
	parentClass?: string
	modClass?: string[]
	items: Array<IItems>
}


const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ parentClass, modClass, items}) => {

	const themeModClass = modClass && modClass.includes('dark-theme') ? ['dark-theme'] : undefined
	const deviceModClass = modClass && modClass.includes('mobile-version') ? ['mobile-version'] : undefined

	const classes = useCreateClassName('bread-crumbs', parentClass, deviceModClass)
	const linkClasses = useCreateClassName('bread-crumbs__link', null, themeModClass)
	const itemClasses = useCreateClassName('bread-crumbs__item', null, themeModClass)

	return (
		<div className={classes}>
			<ul className="bread-crumbs__list">
				{items.map((item, i) => {
					return (
						<li key={i} className={itemClasses}>
							<NavLink to={item.link} className={linkClasses}>{item.title}</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default BreadCrumbs