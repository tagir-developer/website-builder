import React from 'react'
import { useState } from "react"

export interface IUseInputResult {
	bind: {
		value: string
		onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
		isInvalid?: boolean
	}
	value: string
	clear: () => void
	setNewValue: (param: string) => void
}

export const useInput = (initialValue: string, customFunc?: (param: string, array: string[]) => void, inputType?: string, errors?: string[]): IUseInputResult => {
	const [value, setValue] = useState<string>(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {	
		setValue(event.target.value)
		if (customFunc && inputType && errors && errors.length !== 0 && errors.includes(inputType)) {
			customFunc(inputType, errors)
		}	
	}

	// const onChangeClearAndSave = (event: React.FormEvent & { target: HTMLInputElement }): void => {
	// 	let value = event.target.value
	// 	value = value.replace(/"|\\n/ig, '')
	// 	setValue(value)
	// 	if (customFunc && inputType && errors && errors.length !== 0 && errors.includes(inputType)) {
	// 		customFunc(inputType, errors)
	// 	}	
	// }

	const clear = (): void => setValue('')
	const setNewValue = (param: string): void => setValue(param)

	const bindObject = errors && inputType ? {value, onChange, isInvalid: errors.includes(inputType)} : {value, onChange}

	return {
		bind: bindObject,
		value,
		clear,
		setNewValue
	}

}