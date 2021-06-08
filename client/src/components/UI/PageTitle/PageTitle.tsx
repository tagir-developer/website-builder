import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './PageTitle.scss'

interface IPageTitle {
	parentClass: string
	modClass?: string[]
	title?: string
}

const PageTitle: React.FC<IPageTitle> = ({ parentClass, modClass, title, children }) => {

	const pageTitleClasses = useCreateClassName('page-title', parentClass, modClass)

	return (
		<div className={pageTitleClasses}>
			<h1 className="page-title__title">{title}</h1>
			<div className="page-title__text">{children}</div>
		</div>
	)
}

export default PageTitle