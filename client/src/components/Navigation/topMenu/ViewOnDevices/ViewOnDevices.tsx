import React from 'react'
import './ViewOnDevices.scss'
import { useCreateClassName } from '../../../../hooks/createClassName.hook'
import { IDeviceTypes } from '../../../../store/types/page'
import { useSwitchDevicePreview } from '../../../../hooks/useSwitchDevicePreview'

interface IViewOnDevices {
	parentClass?: string
	deviceItems: IDeviceItems[]
}

interface IDeviceItems {
	title: string
	value: IDeviceTypes
}

const ViewOnDevices: React.FC<IViewOnDevices> = ({ parentClass, deviceItems }) => {

	const classes = useCreateClassName('view-on-devices', parentClass)
	const switchDevice = useSwitchDevicePreview()

	const itemHandler = (index: number, value: IDeviceTypes) => {
		switchDevice.setActiveItem(index)
		switchDevice.showDevicePreview(value)
	}

	return (
		<div className={classes}>
			{deviceItems.map((i, index) => {
				return (
					<React.Fragment key={'view-on-devices' + index}>
						{index !== 0 && <div className="view-on-devices__devider"></div>}
						<div
							className={index === switchDevice.activeItem ? 'view-on-devices__button view-on-devices__button_active' : 'view-on-devices__button'}
							onClick={() => itemHandler(index, i.value)}
						>
							{i.title}
						</div>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default ViewOnDevices