import React, { useState } from 'react'
import './ViewOnDevicesMobile.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'
import DarkRoundButtonActive from './DarkRoundButtonActive/DarkRoundButtonActive'

interface IViewOnDevicesMobile {
	parentClass?: string
}

const ViewOnDevicesMobile: React.FC<IViewOnDevicesMobile> = ({ parentClass }) => {

	const classes = useCreateClassName('view-on-devices-mobile', parentClass)

	const [mobileActive, setMobileActive] = useState(true)
	const [tabletActive, setTabletActive] = useState(false)
	const [desktopActive, setDesktopActive] = useState(false)

	const [devType, setDevType] = useState('Смартфон')

	const changeDeviceHandler = (device: string): void => {
		if (device === 'mobile') {
			setMobileActive(true)
			setTabletActive(false)
			setDesktopActive(false)
			setDevType('Смартфон')
			return
		}
		if (device === 'tablet') {
			setMobileActive(false)
			setTabletActive(true)
			setDesktopActive(false)
			setDevType('Планшет')
			return
		}
		if (device === 'desktop') {
			setMobileActive(false)
			setTabletActive(false)
			setDesktopActive(true)
			setDevType('Компьютер')
			return
		}
	}

	return (
		<div className={classes}>
			<div 
				onClick={() => changeDeviceHandler('mobile')} 
				className='view-on-devices-mobile__button-container'
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					iconClass="icon-mobile"
					isActive={mobileActive}
				/>
			</div>
			<div 
				onClick={() => changeDeviceHandler('tablet')} 
				className='view-on-devices-mobile__button-container'
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					iconClass="icon-tablet"
					isActive={tabletActive}
				/>
			</div>
			<div 
				onClick={() => changeDeviceHandler('desktop')} 
				className='view-on-devices-mobile__button-container'
			>
				<DarkRoundButtonActive 
					parentClass="view-on-devices-mobile" 
					iconClass="icon-pc"
					isActive={desktopActive}
				/>
			</div>
			<div className="view-on-devices-mobile__show-device-type">{devType}</div>
		</div>
	)
}

export default ViewOnDevicesMobile