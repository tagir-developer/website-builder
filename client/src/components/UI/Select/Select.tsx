import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Select.scss'
import { v4 as uuid } from 'uuid'

interface ISelect {
	parentClass?: string
	modClass?: string[]
	options: string[]
}

const Select: React.FC<ISelect> = ({ children, parentClass, modClass, options }) => {

	const selectClasses = useCreateClassName('select', parentClass)

	const selectId = uuid()

	const [value, setValue] = useState<string>()

	return (
		<div className={selectClasses}>
			<div className="select__name">{children}</div>

			<div className="select__list-wrapper">
				<select className="select__list" onChange={e => setValue(e.target.value)}>
					{options.map((i, index) => (
						<option
							key={selectId + index}
							className="select__option"
							value={index}
						>
							{i}
						</option>
					))}
				</select>
			</div>

		</div>
	)
}

export default Select