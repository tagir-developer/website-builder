import React from 'react'
import { useState } from "react"

export interface IUseInputHook {
	onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
	value: string
}

export const useInputHook = (initialValue: string): IUseInputHook => {

	const [value, setValue] = useState(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {	
		setValue(event.target.value)
	}

	return {
		value,
		onChange
	}

}