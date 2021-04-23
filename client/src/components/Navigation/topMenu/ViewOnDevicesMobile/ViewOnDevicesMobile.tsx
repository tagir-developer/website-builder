import React, { useState } from 'react'
import './ViewOnDevicesMobile.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import DarkRoundButtonActive from './DarkRoundButtonActive/DarkRoundButtonActive'

interface IViewOnDevicesMobile {
	parentClass?: string
}

const ViewOnDevicesMobile: React.FC<IViewOnDevicesMobile> = ({ parentClass }) => {

	const classes = useCreateClassName('view-on-devices-mobile', parentClass)

	// const [mobileClasses, setMobileClasses] = useState('view-on-devices-mobile__button-container')
	// const [tabletClasses, setTabletClasses] = useState('view-on-devices-mobile__button-container')
	// const [desktopClasses, setDesktopClasses] = useState('view-on-devices-mobile__button-container')

	// const changeDeviceHandler = (device: string): void => {
	// 	if (device === 'mobile') {
	// 		setMobileClasses('view-on-devices-mobile__button-container view-on-devices-mobile__button-container_active')
	// 		setTabletClasses('view-on-devices-mobile__button-container')
	// 		setDesktopClasses('view-on-devices-mobile__button-container')
	// 		return
	// 	}
	// 	if (device === 'tablet') {
	// 		setTabletClasses('view-on-devices-mobile__button-container view-on-devices-mobile__button_active')
	// 		setMobileClasses('view-on-devices-mobile__button-container')
	// 		setDesktopClasses('view-on-devices-mobile__button-container')
	// 		return
	// 	}
	// 	if (device === 'desktop') {
	// 		setDesktopClasses('view-on-devices-mobile__button-container view-on-devices-mobile__button-container_active')
	// 		setMobileClasses('view-on-devices-mobile__button-container')
	// 		setTabletClasses('view-on-devices-mobile__button-container')
	// 		return
	// 	}
	// }

	return (
		<div className={classes}>
			<div 
				onClick={() => changeDeviceHandler('mobile')} 
				className={mobileClasses}
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					modClass={['icon-undo']} 
					activeClass={['icon-undo-green']}
				/>
			</div>
			<div 
				onClick={() => changeDeviceHandler('tablet')} 
				className={tabletClasses}
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					modClass={['icon-save']} 
				/>
			</div>
			<div 
				onClick={() => changeDeviceHandler('desktop')} 
				className={desktopClasses}
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					modClass={['icon-show']} 
				/>
			</div>
		</div>
	)
}

export default ViewOnDevicesMobile