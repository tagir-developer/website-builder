import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './SmallIconButton.scss'

interface ISmallIconButton {
	parentClass: string
	modClass?: string[]
	handler?: (param?: any) => any
	isNotButton?: boolean
}

const SmallIconButton: React.FC<ISmallIconButton> = ({ children, parentClass, modClass, handler, isNotButton }) => {

	const smallButtonClasses = useCreateClassName('small-icon-button', parentClass, modClass)

	if (isNotButton) {
		return (
			<div className={smallButtonClasses}>
				{children}
			</div>
		)
	} else {
		return (
			<button className={smallButtonClasses} onClick={handler}>
				{children}
			</button>
		)
	}


}

export default SmallIconButton