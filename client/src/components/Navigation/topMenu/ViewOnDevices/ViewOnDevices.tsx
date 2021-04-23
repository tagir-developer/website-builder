import React, { useState } from 'react'
import './ViewOnDevices.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'

interface IViewOnDevices {
	parentClass?: string
}

const ViewOnDevices: React.FC<IViewOnDevices> = ({ parentClass }) => {

	const classes = useCreateClassName('view-on-devices', parentClass)

	const [mobileClasses, setMobileClasses] = useState('view-on-devices__button')
	const [tabletClasses, setTabletClasses] = useState('view-on-devices__button')
	const [desktopClasses, setDesktopClasses] = useState('view-on-devices__button')

	const changeDeviceHandler = (device: string): void => {
		if (device === 'mobile') {
			setMobileClasses('view-on-devices__button view-on-devices__button_active')
			setTabletClasses('view-on-devices__button')
			setDesktopClasses('view-on-devices__button')
			return
		}
		if (device === 'tablet') {
			setTabletClasses('view-on-devices__button view-on-devices__button_active')
			setMobileClasses('view-on-devices__button')
			setDesktopClasses('view-on-devices__button')
			return
		}
		if (device === 'desktop') {
			setDesktopClasses('view-on-devices__button view-on-devices__button_active')
			setMobileClasses('view-on-devices__button')
			setTabletClasses('view-on-devices__button')
			return
		}
	}

	return (
		<div className={classes}>
			<div onClick={() => changeDeviceHandler('mobile')} className={mobileClasses}>Смартфон</div>
			<div className="view-on-devices__devider"></div>
			<div onClick={() => changeDeviceHandler('tablet')} className={tabletClasses}>Планшет</div>
			<div className="view-on-devices__devider"></div>
			<div onClick={() => changeDeviceHandler('desktop')} className={desktopClasses}>Компьютер</div>
		</div>
	)
}

export default ViewOnDevices