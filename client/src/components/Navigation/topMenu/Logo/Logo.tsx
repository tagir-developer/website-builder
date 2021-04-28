import React from 'react'
import './Logo.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { NavLink } from 'react-router-dom'

interface ILogo {
	parentClass?: string
	modClass?: string[]
}

const Logo: React.FC<ILogo> = ({ parentClass, modClass }) => {

	const classes = useCreateClassName('logo', parentClass, modClass)

	return (
		<NavLink to="/">
			<div className={classes}></div>
		</NavLink>
	)
}

export default Logo