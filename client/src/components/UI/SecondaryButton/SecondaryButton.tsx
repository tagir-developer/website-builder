import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './SecondaryButton.scss'

interface ISecondaryButton {
	parentClass?: string
	modClass?: string[]
	handler: (param?: any) => any
}

const SecondaryButton: React.FC<ISecondaryButton> = ({children, parentClass, modClass, handler}) => {

	const classes = useCreateClassName('secondary-button', parentClass, modClass)

	return (
		<button className={classes} onClick={handler}>
			{children}
		</button>
	)
}

export default SecondaryButton