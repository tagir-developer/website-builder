import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './SmallIconButton.scss'

interface ISmallIconButton {
	parentClass: string
	modClass?: string[]
	handler: (param: any) => any
}

const SmallIconButton: React.FC<ISmallIconButton> = ({children, parentClass, modClass, handler}) => {

	const smallButtonClasses = useCreateClassName('small-icon-button', parentClass, modClass)

	return (
		<button className={smallButtonClasses} onClick={handler}>
			{children}
		</button>
	)
}

export default SmallIconButton