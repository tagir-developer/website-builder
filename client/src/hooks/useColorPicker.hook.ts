import { useState } from "react"


export interface IUseColorPicker {
	bind: {
		isOpen: boolean
		color: string
		onChangeComplete: (param: { hex: string })=> void
		cancelHandler: () => void
		closePalette: () => void
	}
	color: string
	openPalette: () => void
}

export const useColorPicker = (initialColor: string): IUseColorPicker => {

	const [color, setColor] = useState<string>(initialColor)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const openPalette = (): void => setIsOpen(true)
	const closePalette = (): void => setIsOpen(false)
	const onChangeComplete = (color: {hex: string}): void => setColor(color.hex)
	const cancelHandler = (): void => {
		setColor(initialColor)
		setIsOpen(false)
	}

	return {
		bind: {isOpen, color, onChangeComplete, cancelHandler, closePalette},
		color,
		openPalette
	}

}