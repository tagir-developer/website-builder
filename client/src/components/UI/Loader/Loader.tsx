import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Loader.scss'

interface ILoader {
	parentClass?: string
	modClass?: string[]
}

const Loader: React.FC<ILoader> = ({ parentClass, modClass }) => {

	const loaderClasses = useCreateClassName('loader-ring', parentClass, modClass)

	return (<div className={loaderClasses} />)
}

export default Loader