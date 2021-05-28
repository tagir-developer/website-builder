import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react'
import './ChangeConfigInput.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { useInput } from '../../../hooks/useInput.hook'
import {v4 as uuid} from 'uuid'

interface IChangeConfigInput {
	parentClass?: string
	modClass?: string[]
	title?: string
	value: string
	inputType?: string
}

const ChangeConfigInput: React.FC<IChangeConfigInput> = ({ parentClass, modClass, title, value, inputType }) => {

	const inputClasses = useCreateClassName('change-config-input', parentClass, modClass)

	const inputId: string = uuid();

	const [userName, setUserName] = useState<string>(value) // ! Это значение будем добывать из базы и передавать в пропсах из родителя

	const [isEdit, setIsEdit] = useState<boolean>(false)

	const input = useInput(userName)

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>
	const btnRef = useRef() as MutableRefObject<HTMLDivElement>

	const openHandler = async () => {
		await setIsEdit(true)
		inputRef.current.focus()
	}

	const saveHandler = async () => {
		// ? Здесь нужно запросить подтверждение в попапке (компонент Confirm)
		await setUserName(input.value)
		setIsEdit(false)
	}

	const editCanceled = useCallback((event: MouseEvent): void => {
		if (event.target !== inputRef.current && event.target !== btnRef.current) {
			input.setNewValue(userName)
			setIsEdit(false)
		}
	}, [input, userName])

	useEffect(() => {
		isEdit ? document.addEventListener('click', editCanceled) : document.removeEventListener('click', editCanceled)
	}, [isEdit, editCanceled])

	return (
		<div className={inputClasses}>
			{ isEdit
				? (
					<div
						className={"change-config-input__button change-config-input__button_save-changes"}
						onClick={saveHandler}
						ref={btnRef}
					></div>
				)
				: (
					<div
						className={"change-config-input__button change-config-input__button_change-input"}
						onClick={openHandler}
						ref={btnRef}
					></div>
				)
			}
			<label
				htmlFor={inputId}
				className="change-config-input__input-label"
			>{title}
			</label>
			<input
				id={inputId}
				type={inputType ? inputType : "text"}
				className="change-config-input__input"
				ref={inputRef}
				disabled={!isEdit}
				{...input.bind}
			/>
		</div>
	)
}

export default ChangeConfigInput