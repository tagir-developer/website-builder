import React from 'react'
import './ViewOnDevicesMobile.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import DarkRoundButtonActive from './DarkRoundButtonActive/DarkRoundButtonActive'
import { useSwitchDevicePreview } from '../../../../hooks/useSwitchDevicePreview'
import { IDeviceTypes } from '../../../../store/types/page'

interface IViewOnDevicesMobile {
	parentClass?: string
	deviceItems: IDeviceItems[]
}

interface IDeviceItems {
	title: string
	value: IDeviceTypes
	iconClass: 'icon-mobile' | 'icon-tablet' | 'icon-pc'
}

const ViewOnDevicesMobile: React.FC<IViewOnDevicesMobile> = ({ parentClass, deviceItems }) => {

	const classes = useCreateClassName('view-on-devices-mobile', parentClass)
	const switchDevice = useSwitchDevicePreview()

	const itemHandler = (index: number, value: IDeviceTypes) => {
		switchDevice.setActiveItem(index)
		switchDevice.showDevicePreview(value)
	}

	return (
		<div className={classes}>

			{deviceItems.map((i, index) => {
				return (
					<div
						key={index}
						className='view-on-devices-mobile__button-container'
						onClick={() => itemHandler(index, i.value)}
					>
						<DarkRoundButtonActive
							parentClass="view-on-devices-mobile"
							iconClass={i.iconClass}
							isActive={index === switchDevice.activeItem ? true : false}
						/>
					</div>
				)
			})}
			<div className="view-on-devices-mobile__show-device-type">Устройство</div>
		</div>
	)
}

export default ViewOnDevicesMobile