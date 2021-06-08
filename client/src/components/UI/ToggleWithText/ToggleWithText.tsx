import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ToggleWithText.scss'

interface IToggleWithText {
	name: string
	parentClass?: string
	modClass?: string[]
	value: boolean
	handler: (param?: boolean) => void
}

const ToggleWithText: React.FC<IToggleWithText> = ({children, name, parentClass, modClass, value, handler }) => {

	const toggleWithTextClasses = useCreateClassName('toggle-with-text', parentClass, modClass)

	return (
		<div className={toggleWithTextClasses}>
			<div className="toggle-with-text__switcher-container">
				<input 
					className="toggle-with-text__input" 
					type="checkbox" 
					id={name}
					checked={value}
					onChange={() => handler()}
				/>
				<label className='toggle-with-text__slider' htmlFor={name}></label>
			</div>
			<div className="toggle-with-text__text-container">
				{children}
			</div>
		</div>
	)
}

export default ToggleWithText