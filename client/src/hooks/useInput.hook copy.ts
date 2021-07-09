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
	onChangeRequiredInput: (event: React.FormEvent & { target: HTMLInputElement }, customFunc: (param: string, array: string[]) => void, value: string, errors: string[]) => void
}

export const useInput = (initialValue: string): IUseInputResult => {
	const [value, setValue] = useState(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {
		setValue(event.target.value)
	}
	const onChangeRequiredInput = (event: React.FormEvent & { target: HTMLInputElement }, customFunc: (param: string, array: string[]) => void, value: string, errors: string[]): void => {	
		setValue(event.target.value)
		if (errors.length !== 0 && errors.includes(value)) {
			customFunc(value, errors)
		}
		
	}
	const clear = (): void => setValue('')
	const setNewValue = (param: string): void => setValue(param)

	return {
		bind: {value, onChange},
		value,
		clear,
		setNewValue,
		onChangeRequiredInput
	}

}