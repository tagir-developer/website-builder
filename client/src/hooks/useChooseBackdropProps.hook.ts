interface IBackdropProps {
	type: 'blur' | 'solid'
	isOpen: boolean
}

interface IPropSet {
	isOpen: boolean
	backdropProps: IBackdropProps
}

export const useChooseBackdropProps = (...propSetArray: Array<IPropSet>): IBackdropProps => {

	let result: IBackdropProps = {
		type: 'blur',
		isOpen: false
	}

	for (let i = 0; i < propSetArray.length; i++) {
		if (propSetArray[i].isOpen) {
			result = propSetArray[i].backdropProps
		}
	}

	return result
}