import React from 'react'
import './Logo.scss'

interface ILogo {
	parentClass?: string
}

const Logo: React.FC<ILogo> = ({ parentClass }) => {

	// ? Можно ли реализовать логику генерирования динамических классов в хуках?

	const classes: string[] = [
		"logo"
	]

	if (parentClass) {
		classes.push(parentClass + "__logo")
	}

	return (
		<div className={classes.join(' ')}>
		</div>
	)
}

export default Logo