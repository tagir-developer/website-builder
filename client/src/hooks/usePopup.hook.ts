import { useState } from "react"

export interface IPopupConfirm {
	setPopup: (param: boolean) => void
	confirmFunc: (param: boolean) => void
	isConfirm: boolean
}

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
	confirm: IPopupConfirm
	isOpen: boolean
	handler: () => void
	closePopup: () => void
	openPopup: () => void
	showHide: (param: number) => void
	closeAndGoBack: (param: any) => void
	setPopup: (param: boolean) => void
}

export const usePopup = (initialState: boolean, initType: 'blur' | 'solid'): IUsePopup => {

	const [isOpen, setIsOpen] = useState<boolean>(initialState)

	const [isConfirm, setIsConfirm] = useState<boolean>(false)

	const type = initType

	const handler = (): void => setIsOpen(prev => !prev)
	const openPopup = (): void => setIsOpen(true)
	const closePopup = (): void => setIsOpen(false)
	const setPopup = (param: boolean): void => setIsOpen(param)
	const showHide = (delay: number): void => {
		openPopup()
		setTimeout(() => closePopup(), delay)
	}
	const closeAndGoBack = (history: any): void => {
		closePopup()
		setTimeout(() => history.goBack(), 400)
	}
	const confirmFunc = (param: boolean): void => setIsConfirm(param)

	return {
		popupProps: {type, isOpen, handler},
		backdropProps: {type, isOpen},
		confirm: {setPopup, confirmFunc, isConfirm},
		isOpen,
		handler,
		openPopup,
		closePopup,
		setPopup,
		showHide,
		closeAndGoBack,
	}

}