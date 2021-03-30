import React from 'react'
import './BreadCrumbs.scss'

interface IBreadCrumbsProps {
	parentClass?: string
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ parentClass }) => {

	const classes: string[] = [
		"bread-crumbs"
	]

	if (parentClass) {
		classes.push(parentClass + "__bread-crumbs")
	}

	return (
		<div className={classes.join(' ')}>
			<ul className="bread-crumbs__list">
				<li className="bread-crumbs__item">
					<a href="/" className="bread-crumbs__link">Мои сайты</a>
				</li>
				<li className="bread-crumbs__item">
					<a href="/" className="bread-crumbs__link">Список страниц</a>
				</li>
			</ul>
		</div>
	)
}

export default BreadCrumbs