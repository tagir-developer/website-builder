import React from 'react'
import { useState } from "react"

export interface IUseInputHook {
	bind: {
		value: string
		onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
	}
	value: string
	onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
	clear: () => void
}

export const useInputHook = (initialValue: string): IUseInputHook => {

	const [value, setValue] = useState(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {	
		setValue(event.target.value)
	}
	const clear = (): void => {	
		setValue('')
	}

	return {
		bind: {value, onChange},
		value,
		onChange,
		clear
	}

}