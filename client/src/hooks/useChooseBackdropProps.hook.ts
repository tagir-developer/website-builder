interface IPopupProps {
	type: 'blur' | 'solid'
	isOpen: boolean
	handler: () => void
}

interface IPropSet {
	isOpen: boolean
	popupProps: IPopupProps
}

export const useChooseBackdropProps = (...propSetArray: Array<IPropSet>): IPopupProps => {

	let result: IPopupProps = {
		type: 'blur',
		isOpen: false,
		handler: () => {},
	}

	for (let i = 0; i < propSetArray.length; i++) {
		if (propSetArray[i].isOpen) {
			result = propSetArray[i].popupProps
		}
	}

	return result
}



// interface IPopupProps {
// 	type: 'blur' | 'solid'
// 	isOpen: boolean
// 	handler: () => void
// }

// interface IPropSet {
// 	isOpen: boolean
// 	popupProps: IPopupProps
// }

// export const useChooseBackdropProps = (...propSetArray: Array<IPropSet>): IPopupProps => {

// 	let result: IPopupProps = {
// 		type: 'blur',
// 		isOpen: false,
// 		handler: () => {},
// 	}

// 	for (let i = 0; i < propSetArray.length; i++) {
// 		if (propSetArray[i].isOpen) {
// 			result = propSetArray[i].popupProps
// 		}
// 	}

// 	return result
// }