import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './SmallButton.scss'

interface ISmallButton {
	parentClass: string
	modClass?: string[]
	handler: (param: any) => any
}

const SmallButton: React.FC<ISmallButton> = ({children, parentClass, modClass, handler}) => {

	const smallButtonClasses = useCreateClassName('small-button', parentClass, modClass)

	return (
		<button className={smallButtonClasses} onClick={handler}>
			{children}
		</button>
	)
}

export default SmallButton