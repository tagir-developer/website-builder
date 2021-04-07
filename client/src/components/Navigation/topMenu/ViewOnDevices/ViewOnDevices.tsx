import React from 'react'
import './ViewOnDevices.scss'
import {useCreateClassName} from '../../../../hooks/createClassName.hook'

interface IViewOnDevices {
	parentClass?: string
}

const ViewOnDevices: React.FC<IViewOnDevices> = ({ parentClass }) => {

	const classes = useCreateClassName('view-on-devices', parentClass)

	// const changeDeviceHandler = (e: MouseEvent) => {
	// 	console.log(e.target)
	// }

	return (
		<div className={classes}>
			<div className="view-on-devices__button view-on-devices__button_active">Смартфон</div>
			<div className="view-on-devices__button">Планшет</div>
			<div className="view-on-devices__button">Компьютер</div>
		</div>
	)
}

export default ViewOnDevices