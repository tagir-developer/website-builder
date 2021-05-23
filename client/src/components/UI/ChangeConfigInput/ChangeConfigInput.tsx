import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import './ChangeConfigInput.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'

interface IChangeConfigInput {
	parentClass?: string
	modClass?: string[]
}

const ChangeConfigInput: React.FC<IChangeConfigInput> = ({ parentClass, modClass }) => {

	const inputClasses = useCreateClassName('change-config-input', parentClass, modClass)

	const input = useInput('Владислав Иванов')

	const [isEdit, setIsEdit] = useState<boolean>(false)

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>

	let iconMod
	isEdit ? iconMod = 'save-changes' : iconMod = 'change-input'

	const inputHandler = async () => {
		await setIsEdit(prev => !prev)
		inputRef.current.focus()
		// setTimeout(() => inputRef.current.focus(), 2000)
	}

	// useEffect(() => {

	// 	const unfocus = (event: MouseEvent) => {
	// 		// event.target && event.target.classList !== "profile-change-name"
	// 		// if (event.target && event.target.className !== "change-config-input__input") {
	// 		// 	setIsEdit(prev => !prev)
	// 		// }

			
	// 	}

	// 	if (isEdit) {
	// 		document.addEventListener('click', unfocus)

	// 	} else {
	// 		document.removeEventListener('click', unfocus)
	// 	}

	// }, [isEdit])

	document.onclick = (event: MouseEvent) => {
		const elem = event.target
		if (elem !== inputRef.current ) {
			console.log('Клик вне инпута!')
		}
	}

	return (
		<div className={inputClasses}>
			<div
				className={`change-config-input__button change-config-input__button_${iconMod}`}
				onClick={inputHandler}
			></div>
			<label
				htmlFor="profile-change-name"
				className="change-config-input__input-label"
			>Изменить имя
			</label>
			<input
				id="profile-change-name"
				type="text"
				className="change-config-input__input"
				ref={inputRef}
				disabled={!isEdit}
				{...input.bind}
			/>
		</div>
	)
}

export default ChangeConfigInput