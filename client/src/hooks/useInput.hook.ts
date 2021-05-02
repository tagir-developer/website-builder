import React from 'react'
import { useState } from "react"

interface IUseInputResult {
	bind: {
		value: string
		onChange: (event: React.FormEvent & { target: HTMLInputElement }) => void
	}
	value: string
	clear: () => void
}

export const useInput = (initialValue: string): IUseInputResult => {
	const [value, setValue] = useState(initialValue)

	const onChange = (event: React.FormEvent & { target: HTMLInputElement }): void => {
		setValue(event.target.value)
	}

	const clear = (): void => setValue('')

	return {
		bind: {value, onChange},
		value,
		clear
	}

}