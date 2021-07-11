import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import './Error.scss'

interface IError {
	parentClass: string
	modClass?: string[]
	title?: string
	handler: (param?: any) => any
}

const Error: React.FC<IError> = ({ parentClass, modClass, title, children, handler }) => {

	const errorClasses = useCreateClassName('error-message', parentClass, modClass)

	return (
		<div className={errorClasses}>
			<h1 className="error-message__title">{title}</h1>
			<div className="error-message__text">{children}</div>
			<SecondaryButton
				parentClass="error-message"
				handler={handler}
			>
				Отправить повторно
			</SecondaryButton>
		</div>
	)
}

export default Error