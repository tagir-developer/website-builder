import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Input.scss'
// import { v4 as uuid } from 'uuid'

interface IInput {
	parentClass?: string
	modClass?: string[]
	type: string
	value: string
	onChange: (param?: any) => void
	placeholder?: string
}

const Input: React.FC<IInput> = ({ children, parentClass, modClass, type, value, onChange, placeholder }) => {

	const inputClasses = useCreateClassName('input-basic', parentClass)

	// const InputId = uuid()

	return (
		<>
			{children && <label
				// htmlFor="form-processing-site-name"
				className="input-basic__label"
			>
				{children}
			</label>}
			
			<input
				// id="form-processing-site-name"
				type={type}
				className={inputClasses}
				value={value}
				onChange={onChange}
				placeholder={placeholder ? placeholder : ""}
			/>
		</>
	)
}

export default Input