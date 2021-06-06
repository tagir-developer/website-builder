import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Select.scss'

interface IOptions {
	value: string
	label: string
}

interface ISelect {
	parentClass?: string
	modClass?: string[]
	options: Array<IOptions>
	value: string
	onChange: (event: React.FormEvent & { target: HTMLSelectElement }) => void
}

const Select: React.FC<ISelect> = ({ children, parentClass, modClass, options, value, onChange }) => {

	const selectClasses = useCreateClassName('select', parentClass)

	return (
		<div className={selectClasses}>
			<div className="select__name">{children}</div>

			<div className="select__list-wrapper">
				<div className="select__list-background"></div>
				<div className="select__list-button"></div>
				<select value={value} className="select__list" onChange={e => onChange(e)}>
					{options.map((i, index) => (
						<option
							key={index}
							className="select__option"
							value={i.value}
						>
							{i.label}
						</option>
					))}
				</select>
			</div>

		</div>
	)
}

export default Select