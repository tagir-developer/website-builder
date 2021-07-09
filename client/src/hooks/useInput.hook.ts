import React from 'react'
import { useState } from "react"

interface IUseInputResult {
	bind: {
		value: string
		onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
	}
	value: string
	clear: () => void
	setNewValue: (param: string) => void
}

export const useInput = (initialValue: string, customFunc?: (param: string, array: string[]) => void, inputType?: string, errors?: string[]): IUseInputResult => {
	const [value, setValue] = useState(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {	
		setValue(event.target.value)
		if (customFunc && inputType && errors && errors.length !== 0 && errors.includes(inputType)) {
			customFunc(inputType, errors)
		}	
	}
	const clear = (): void => setValue('')
	const setNewValue = (param: string): void => setValue(param)

	return {
		bind: {value, onChange},
		value,
		clear,
		setNewValue
	}

}