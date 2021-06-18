import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Textarea.scss'

interface ITextarea {
	parentClass?: string
	modClass?: string[]
	value: string
	onChange: (param?: any) => void
	placeholder?: string
}

const Textarea: React.FC<ITextarea> = ({ children, parentClass, modClass, value, onChange, placeholder }) => {

	const textareaClasses = useCreateClassName('textarea-basic', parentClass)

	// const TextareaId = uuid()

	return (
		<>
			{children && <label className="textarea-basic__label">{children}</label>}

			<textarea
				className={textareaClasses}
				value={value}
				onChange={onChange}
				placeholder={placeholder ? placeholder : ""}
			/>

			{/* <label
				htmlFor="question-textarea"
				className="send-question__input-label input-label"
			>
				Наберите сообщение:
			</label>
			<textarea
				id="question-textarea"
				className="send-question__textarea textarea"
				placeholder=""
			/> */}
		</>
	)
}

export default Textarea