import { useState } from "react"
import { JsxElement } from "typescript"

interface IMultiPopupConfirm {
	setPopup: (contentId: string, param: boolean) => void
	confirmFunc: (param: boolean) => void
	isConfirm: boolean
}

interface IArrayElem {
	id: string
	elem: () => JSX.Element
}

interface IUseMultiPopup {
	popupProps: {
		type: 'blur' | 'solid'
		isOpen: boolean
		handler: (contentId: string) => void
	}
	backdropProps: {
		type: 'blur' | 'solid'
		isOpen: boolean
	}
	confirm: IMultiPopupConfirm
	isOpen: boolean
	closePopup: () => void
	openPopup: (contentId: string) => void
	setPopup: (contentId: string, param: boolean) => void
	content: JsxElement
}

export const useMultiPopup = (array: IArrayElem[], initType: 'blur' | 'solid'): IUseMultiPopup => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isConfirm, setIsConfirm] = useState<boolean>(false)

	const type = initType

	const [content, setContent] = useState<any>(null)

	const setPopup = (contentId: string, value: boolean): void => {
		const elem = array.filter(i => i.id === contentId)[0]
		setContent(elem.elem)
		setIsOpen(value)
	}

	const openPopup = (contentId: string): void => {
		console.log('КАКОЙ ID', contentId)
		const elem = array.filter(i => i.id === contentId)[0]
		setContent(elem.elem)
		setIsOpen(true)
	}

	const closePopup = (): void => {
		setIsOpen(false)
	}

	const confirmFunc = (param: boolean): void => setIsConfirm(param)

	return {
		popupProps: { type, isOpen, handler: closePopup },
		backdropProps: { type, isOpen },
		confirm: { setPopup, confirmFunc, isConfirm },
		isOpen,
		openPopup,
		closePopup,
		setPopup,
		content
	}

}