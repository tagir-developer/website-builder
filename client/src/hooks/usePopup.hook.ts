import React from 'react'
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
}

// type typeInit = 'blur' | 'solid'

export const usePopup = (initialState: boolean, initType: 'blur' | 'solid'): IUsePopup => {

	const [isOpen, setIsOpen] = useState<boolean>(initialState)

	const type = initType

	const handler = (): void => setIsOpen(prev => !prev)
	const openPopup = (): void => setIsOpen(true)
	const closePopup = (): void => setIsOpen(false)

	return {
		popupProps: {type, isOpen, handler},
		backdropProps: {type, isOpen},
		isOpen,
		handler,
		openPopup,
		closePopup
	}

}