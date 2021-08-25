import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Toggle.scss'

interface IToggle  {
	name: string
	parentClass?: string
	modClass?: string[]
	value: boolean
	handler: (param?: boolean) => void
}

const Toggle: React.FC<IToggle> = ({name, parentClass, modClass, handler, value}) => {

	const toggleClasses = useCreateClassName('toggle', parentClass)
	const sliderClasses = useCreateClassName('toggle__slider', null, modClass)

	return (
		<div className={toggleClasses}>
			<input 
				className="toggle__input" 
				type="checkbox" 
				id={name}
				checked={value}
				onChange={() => handler()} 
			/>
			<label className={sliderClasses} htmlFor={name}></label>
		</div>
	)
}

export default Toggle