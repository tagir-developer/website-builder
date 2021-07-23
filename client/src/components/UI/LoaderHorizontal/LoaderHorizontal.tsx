import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './LoaderHorizontal.scss'

interface ILoaderHorizontal {
	parentClass?: string
	modClass?: string[]
}

const LoaderHorizontal: React.FC<ILoaderHorizontal> = ({ parentClass, modClass }) => {

	const loaderHorizontalClasses = useCreateClassName('loader-horizontal', parentClass, modClass)

	return (
		<div className={loaderHorizontalClasses}>
			<div className="loader-horizontal__wrapper">
				<div className="loader-horizontal__div"></div>
				<div className="loader-horizontal__div"></div>
				<div className="loader-horizontal__div"></div>
				<div className="loader-horizontal__div"></div>
			</div>
		</div>
	)
}

export default LoaderHorizontal