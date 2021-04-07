import React from 'react'
import './Logo.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'

interface ILogo {
	parentClass?: string
	modClass?: string[]
}

const Logo: React.FC<ILogo> = ({ parentClass, modClass}) => {

	const classes = useCreateClassName('logo', parentClass, modClass)

	return (
		<div className={classes}>
		</div>
	)
}

export default Logo