import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Button.scss'

interface IButton {
	parentClass?: string
	modClass?: string[]
	handler: (param: any) => any
	disabled?: boolean
}

const Button: React.FC<IButton> = ({children, parentClass, modClass, handler, disabled}) => {

	const buttonClasses = useCreateClassName('button', parentClass, modClass)

	return (
		<button 
			className={buttonClasses} 
			onClick={handler} 
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button