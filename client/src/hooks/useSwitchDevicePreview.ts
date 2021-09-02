import {useState} from 'react'
import { IDeviceTypes } from '../store/types/page'
import { useActions, useTypedSelector } from './reduxHooks'

interface IUseSwitchDevicePreview {
	activeItem: number
	setActiveItem: Function
	showDevicePreview: Function
}

export const useSwitchDevicePreview = (): IUseSwitchDevicePreview => {

	const {devicePreview} = useTypedSelector(state => state.page)
	const {showDevicePreview} = useActions()

	const previewMap = (device: IDeviceTypes): number => {
		if (device === 'mobile') return 0
		if (device === 'tablete') return 1
		if (device === 'pc') return 2
		return 0
	}

	const [activeItem, setActiveItem] = useState<number>(previewMap(devicePreview))

	return {
		activeItem,
		setActiveItem,
		showDevicePreview
	}

}