import { MouseEventHandler, MutableRefObject, useCallback, useEffect, useRef } from 'react'
import { useState } from "react"
import { IUseInputResult, useInput } from './useInput.hook'
import { IPopupConfirm } from './usePopup.hook'

interface IuseChangeConfigInput {
	isEdit: boolean
	openConfirmPopup: MouseEventHandler<HTMLDivElement>
	startChangeInput: MouseEventHandler<HTMLDivElement>
	btnRef: MutableRefObject<HTMLDivElement>
	inputRef: MutableRefObject<HTMLInputElement>
	input: IUseInputResult
	inputType: string
}

export const useChangeConfigInput = (configValue: string, confirm: IPopupConfirm, handler: (id: string, inputValue: string) => void, userId: string, propsInputType: string = 'text', isPasswordInput: boolean = false): IuseChangeConfigInput => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const [inputType, setInputType] = useState<string>(propsInputType)

	const input = useInput(configValue)

	const inputRef = useRef() as MutableRefObject<HTMLInputElement>
	const btnRef = useRef() as MutableRefObject<HTMLDivElement>

	const startChangeInput = async (): Promise<void> => {
		if (isPasswordInput) {
			await setIsEdit(true)
			setInputType('text')
			input.clear()
			inputRef.current.focus()
		} else {
			await setIsEdit(true)
			inputRef.current.focus()
		}
	}

	const openConfirmPopup = (): void => {
		confirm.setPopup(true)
	}

	const editCanceled = useCallback((event: MouseEvent): void => {
		if (event.target !== inputRef.current && event.target !== btnRef.current) {
			if (isPasswordInput) {
				setInputType('password')
				input.setNewValue(configValue)
				setIsEdit(false)
			} else {
				input.setNewValue(configValue)
				setIsEdit(false)
			}
		}
		// eslint-disable-next-line
	}, [input, configValue])


	useEffect(() => {
		if (confirm.isConfirm) {
			confirm.confirmFunc(false)
			confirm.setPopup(false)
			handler(userId, input.value)
		}
		// eslint-disable-next-line
	}, [confirm.isConfirm])

	useEffect(() => {
		isEdit ? document.addEventListener('click', editCanceled) : document.removeEventListener('click', editCanceled)
	}, [isEdit, editCanceled])

	return {
		isEdit,
		openConfirmPopup,
		startChangeInput,
		btnRef,
		inputRef,
		input,
		inputType
	}

}