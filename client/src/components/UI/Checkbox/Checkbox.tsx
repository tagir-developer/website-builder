import React, { ChangeEventHandler } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Checkbox.scss'
import { v4 as uuid } from 'uuid'

interface ICheckbox {
	parentClass?: string
	modClass?: string[]
	value: boolean
	handler: ChangeEventHandler<HTMLInputElement>
}

const Checkbox: React.FC<ICheckbox> = ({ children, parentClass, modClass, value, handler }) => {

	const checkboxClasses = useCreateClassName('checkbox', parentClass)
	const dimpleClasses = useCreateClassName('checkbox__dimple', null, modClass)

	const checkboxId = uuid()

	return (
		<div className={checkboxClasses}>
			<div className="checkbox__container">
				<div className="checkbox__dimple-container">
					<input 
						id={checkboxId} 
						className="checkbox__input" 
						type="checkbox" 
						checked={value} 
						onChange={handler} 
					/>
					<label 
						className={dimpleClasses} 
						htmlFor={checkboxId}
					></label>
				</div>
				<div className="checkbox__text">{children}</div>
			</div>
		</div>
	)
}

export default Checkbox