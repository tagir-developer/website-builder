import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Input.scss'
// import { v4 as uuid } from 'uuid'

interface IInput {
	parentClass?: string
	modClass?: string[]
	type: string
	value?: string
	onChange: (param?: any) => void
	placeholder?: string
	name?: string
}

const Input: React.FC<IInput> = ({ children, parentClass, modClass, name, type, value, onChange, placeholder }) => {

	const inputClasses = useCreateClassName('input-basic', parentClass)

	// const InputId = uuid()

	return (
		<>
			{children && <label
				className="input-basic__label"
			>
				{children}
			</label>}
			
			<input
				type={type}
				className={inputClasses}
				value={value || ''}
				name={name || ''}
				onChange={onChange}
				// placeholder={placeholder ? placeholder : ""}
				placeholder={placeholder || ''}
			/>
		</>
	)
}

export default Input