import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ToggleWithText.scss'

interface IToggleWithText {
	name: string
	parentClass?: string
	modClass?: string[]
}

const ToggleWithText: React.FC<IToggleWithText> = ({children, name, parentClass, modClass }) => {

	const toggleWithTextClasses = useCreateClassName('toggle-with-text', parentClass, modClass)

	const [value, setValue] = useState<boolean>(true)

	console.log(value)

	return (
		<div className={toggleWithTextClasses}>
			<div className="toggle-with-text__switcher-container">
				<input 
					className="toggle-with-text__input" 
					type="checkbox" 
					id={name}
					checked={value}
					onChange={() => setValue(prev => !prev)}
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