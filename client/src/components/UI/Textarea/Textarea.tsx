import classNames from 'classnames'
import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Textarea.scss'

interface ITextarea {
	parentClass?: string
	modClass?: string[]
	value: string
	onChange: (param?: any) => void
	placeholder?: string
	isInvalid?: boolean
}

const Textarea: React.FC<ITextarea> = ({ children, parentClass, modClass, value, onChange, placeholder, isInvalid }) => {

	const textareaClasses = useCreateClassName('textarea-basic', parentClass)

	const textareaFinalClass = classNames({
		[textareaClasses]: true,
		'textarea-basic_invalid-input': isInvalid ? isInvalid : false
	})

	return (
		<>
			{children && <label className="textarea-basic__label">{children}</label>}
			<textarea
				className={textareaFinalClass}
				value={value}
				onChange={onChange}
				placeholder={placeholder ? placeholder : ""}
			/>
		</>
	)
}

export default Textarea