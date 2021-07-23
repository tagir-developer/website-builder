import React from 'react'
import './ChangeConfigInput.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useChangeConfigInput } from '../../../hooks/useChangeConfigInput'

interface IChangeConfigInput {
	parentClass?: string
	modClass?: string[]
	title?: string
	value: string
	inputType?: string
	confirm: {
		setPopup: (param: boolean) => void
		confirmFunc: (param: boolean) => void
		isConfirm: boolean
	}
	handler: (id: string, inputValue: string) => void
	userId: string
	isPassword?: boolean
}

const ChangeConfigInput: React.FC<IChangeConfigInput> = ({ parentClass, modClass, title, value, inputType, confirm, handler, userId, isPassword }) => {

	const inputClasses = useCreateClassName('change-config-input', parentClass, modClass)

	const configInput = useChangeConfigInput(value, confirm, handler, userId, inputType, isPassword)

	return (
		<div className={inputClasses}>
			{configInput.isEdit
				? (
					<div
						className={"change-config-input__button change-config-input__button_save-changes"}
						onClick={configInput.openConfirmPopup}
						ref={configInput.btnRef}
					></div>
				)
				: (
					<div
						className={"change-config-input__button change-config-input__button_change-input"}
						onClick={configInput.startChangeInput}
						ref={configInput.btnRef}
					></div>
				)
			}
			<label
				className="change-config-input__input-label"
			>
				{configInput.isEdit && isPassword ? "Придумайте новый пароль" : title}
			</label>
			<input
				type={configInput.inputType}
				className="change-config-input__input"
				ref={configInput.inputRef}
				disabled={!configInput.isEdit}
				{...configInput.input.bind}
			/>
		</div>
	)

}

export default ChangeConfigInput