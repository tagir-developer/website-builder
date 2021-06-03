import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Checkbox.scss'
import { v4 as uuid } from 'uuid'

interface ICheckbox {
	parentClass?: string
	modClass?: string[]
}

const Checkbox: React.FC<ICheckbox> = ({ children, parentClass, modClass }) => {

	const checkboxClasses = useCreateClassName('checkbox', parentClass)
	const dimpleClasses = useCreateClassName('checkbox__dimple', null, modClass)

	const checkboxId = uuid()

	return (
		<div className={checkboxClasses}>
			<div className="checkbox__container">

				<div className="checkbox__dimple-container">
					<input className="checkbox__input" type="checkbox" id={checkboxId} />
					<label className={dimpleClasses} htmlFor={checkboxId}></label>
				</div>

				<div className="checkbox__text">{children}</div>

			</div>

		</div>
	)
}

export default Checkbox