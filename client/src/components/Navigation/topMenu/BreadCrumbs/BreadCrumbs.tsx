import React from 'react'
import './BreadCrumbs.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'

interface IBreadCrumbsProps {
	parentClass?: string
	modClass?: string[]
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ parentClass, modClass }) => {

	const classes = useCreateClassName('bread-crumbs', parentClass)
	const linkClasses = useCreateClassName('bread-crumbs__link', null, modClass)
	const itemClasses = useCreateClassName('bread-crumbs__item', null, modClass)

	return (
		<div className={classes}>
			<ul className="bread-crumbs__list">
				<li className={itemClasses}>
					<a href="/" className={linkClasses}>Мои сайты</a>
				</li>
				<li className={itemClasses}>
					<a href="/" className={linkClasses}>Список страниц</a>
				</li>
			</ul>
		</div>
	)
}

export default BreadCrumbs