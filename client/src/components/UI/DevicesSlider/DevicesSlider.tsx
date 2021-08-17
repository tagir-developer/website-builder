import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './DevicesSlider.scss'
import RangeSlider from '../RangeSlider/RangeSlider'
import { IUseSlider } from '../../../hooks/useSlider'

interface IDevicesSlider {
	parentClass?: string
	modClass?: string[]
	title?: string
	slider: IUseSlider
}

const DevicesSlider: React.FC<IDevicesSlider> = ({ parentClass, modClass, title, slider }) => {

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
				{...slider.bind}
			/>

		</div>
	)
}

export default DevicesSlider