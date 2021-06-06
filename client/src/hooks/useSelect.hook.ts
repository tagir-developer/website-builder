import React from 'react'
import { useState } from "react"

interface IOptions {
	value: string
	label: string
}

interface IUseSelect {
	bind: {
		value: string
		onChange: (event: React.FormEvent & { target: HTMLSelectElement }) => void
		options: Array<IOptions>
	}
	value: string
	onChange: (event: React.FormEvent & { target: HTMLSelectElement }) => void
	clear: () => void
	setNewValue: (param: string) => void
}

export const useSelect = (options: Array<IOptions>, initialValue?: string): IUseSelect => {

	// const [value, setValue] = useState(options[0].value)
	const [value, setValue] = useState(initialValue ? initialValue : options[0].value)

	const onChange = (event: React.FormEvent & { target: HTMLSelectElement }): void => {
		setValue(event.target.value)
	}
	const clear = (): void => setValue('')
	const setNewValue = (param: string): void => setValue(param)

	return {
		bind: {value, onChange, options},
		value,
		onChange,
		clear,
		setNewValue
	}

}