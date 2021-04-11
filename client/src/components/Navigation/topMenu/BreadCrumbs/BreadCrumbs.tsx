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

	const classes = useCreateClassName('bread-crumbs', parentClass)
	const linkClasses = useCreateClassName('bread-crumbs__link', null, modClass)
	const itemClasses = useCreateClassName('bread-crumbs__item', null, modClass)

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