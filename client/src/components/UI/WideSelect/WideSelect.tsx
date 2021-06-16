import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './WideSelect.scss'

interface IOptions {
	value: string
	label: string
}

interface IWideSelect {
	parentClass?: string
	modClass?: string[]
	options: Array<IOptions>
	value: string
	onChange: (event: React.FormEvent & { target: HTMLSelectElement }) => void
}

const WideSelect: React.FC<IWideSelect> = ({ children, parentClass, options, value, onChange }) => {

	const wideSelectClasses = useCreateClassName('wide-select', parentClass)

	return (
		<div className={wideSelectClasses}>
			<div className="wide-select__name">{children}</div>

			<div className="wide-select__list-wrapper">
				<div className="wide-select__list-background"></div>
				<div className="wide-select__list-button"></div>
				<select 
					value={value} 
					className="wide-select__list" 
					onChange={e => onChange(e)}
				>
					{options.map((i, index) => (
						<option
							key={index}
							className="wide-select__option"
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

export default WideSelect