import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { Slider, Handles, Tracks } from 'react-compound-slider'
import './DevicesSlider.scss'

interface IDevicesSlider {
	parentClass?: string
	modClass?: string[]
}

const DevicesSlider: React.FC<IDevicesSlider> = ({ children, parentClass, modClass }) => {

	const devicesSliderClasses = useCreateClassName('devices-slider', parentClass)


	return (
		<div className={devicesSliderClasses}>


			<Slider
				rootStyle={sliderStyle}
				domain={[0, 100]} // [min, max]
				values={[0, 50, 100]} // slider values
			>
				<Rail>

				</Rail>
				<Handles>

				</Handles>
				<Tracks left={false} right={false}>

				</Tracks>
				<Ticks count={10}>

				</Ticks>
			</Slider>
		</div>
	)
}

export default DevicesSlider