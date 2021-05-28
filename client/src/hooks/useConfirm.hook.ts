import { useState } from "react"

interface IUseConfirm {
	bind: {
		value: boolean
		handler: (param: boolean) => void
	}
	value: boolean
	handler: (param: boolean) => void
}

export const useConfirm = (): IUseConfirm => {
	
	const [value, setValue] = useState<boolean>(false)

	const handler = (param: boolean): void => setValue(param)

	return {
		bind: {value, handler},
		value,
		handler
	}

}