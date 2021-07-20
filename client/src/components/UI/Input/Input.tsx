import classNames from 'classnames'
import React, { MutableRefObject } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Input.scss'

interface IInput {
	parentClass?: string
	modClass?: string[]
	type: string
	value?: string
	onChange: (param?: any) => void
	placeholder?: string
	name?: string
	isInvalid?: boolean
}

const Input: React.FC<IInput> = ({ children, parentClass, modClass, name, type, value, onChange, placeholder, isInvalid }) => {

	const inputClasses = useCreateClassName('input-basic', parentClass)

	const inputFinalClass = classNames({
		[inputClasses]: true,
		'input-basic_invalid-input': isInvalid ? isInvalid : false
	})

	return (
		<>
			{children && <label
				className="input-basic__label"
			>
				{children}
			</label>}
			
			<input
				type={type}
				className={inputFinalClass}
				value={value || ''}
				name={name || ''}
				onChange={onChange}
				placeholder={placeholder || ''}
			/>
		</>
	)
}

export default Input