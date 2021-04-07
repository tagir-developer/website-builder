import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Toggle.scss'

interface IToggle  {
	name: string
	parentClass?: string
	modClass?: string[]
}

const Toggle: React.FC<IToggle> = ({name, parentClass, modClass}) => {

	const toggleClasses = useCreateClassName('toggle', parentClass)
	const sliderClasses = useCreateClassName('toggle__slider', null, modClass)

	return (
		<div className={toggleClasses}>
			<input className="toggle__input" type="checkbox" id={name} />
			<label className={sliderClasses} htmlFor={name}></label>
		</div>
	)
}

export default Toggle