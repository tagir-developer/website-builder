import {useState} from 'react'

interface IUseCheck {
	bind: {
		value: boolean
		handler: () => void
	}
	value: boolean
	handler: () => void
	setNewValue: (param: boolean) => void
}

export const useCheck = (initialValue: boolean): IUseCheck => {

	const [value, setValue] = useState(initialValue)

	const handler = (): void => {
		setValue(prev => !prev)
	}
	const setNewValue = (param: boolean): void => setValue(param)

	return {
		bind: {value, handler},
		value,
		handler,
		setNewValue

	}

}