import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './DevicesSlider.scss'
import RangeSlider from '../RangeSlider/RangeSlider'

interface IDevicesSlider {
	parentClass?: string
	modClass?: string[]
	title?: string
}

const DevicesSlider: React.FC<IDevicesSlider> = ({ parentClass, modClass, title }) => {

	const devicesSliderClasses = useCreateClassName('devices-slider', parentClass)
	  

	return (
		<div className={devicesSliderClasses}>

			{title && <div className="devices-slider__title">{title}</div>}

			<div className="devices-slider__icons-container">
				<div className="devices-slider__icon devices-slider__icon_mobile"></div>
				<div className="devices-slider__icon devices-slider__icon_tablet"></div>
				<div className="devices-slider__icon devices-slider__icon_pc"></div>
			</div>

			<RangeSlider 
				parentClass="devices-slider" 
				domain={[0, 2]} 
				defaultValues={[2]} 
				step={1} 
			/>

		</div>
	)
}

export default DevicesSlider