import { useState } from "react"

interface IUsePopup {
	popupProps: {
		type: 'blur' | 'solid'
		isOpen: boolean
		handler: () => void
	}
	backdropProps: {
		type: 'blur' | 'solid'
		isOpen: boolean
	}
	isOpen: boolean
	handler: () => void
	closePopup: () => void
	openPopup: () => void
	showHide: (param: number) => void
}

export const usePopup = (initialState: boolean, initType: 'blur' | 'solid'): IUsePopup => {

	const [isOpen, setIsOpen] = useState<boolean>(initialState)

	const type = initType

	const handler = (): void => setIsOpen(prev => !prev)
	const openPopup = (): void => setIsOpen(true)
	const closePopup = (): void => setIsOpen(false)
	const showHide = (delay: number): void => {
		openPopup()
		setTimeout(() => closePopup(), delay)
	}

	return {
		popupProps: {type, isOpen, handler},
		backdropProps: {type, isOpen},
		isOpen,
		handler,
		openPopup,
		closePopup,
		showHide
	}

}