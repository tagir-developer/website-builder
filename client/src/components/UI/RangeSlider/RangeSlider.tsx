import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import { Slider, Handles, Tracks, Rail } from 'react-compound-slider'
import './RangeSlider.scss'
import { SliderRail, Handle, ProgressLine } from './SliderUIComponents'

interface IRangeSlider {
	parentClass?: string
	domain: number[]
	step: number
	values: readonly number[]
	onChange: (valuesParam: ReadonlyArray<number>) => void
}

const RangeSlider: React.FC<IRangeSlider> = ({ parentClass, domain, step, values, onChange }) => {

	const rangeSliderClasses = useCreateClassName('range-slider', parentClass)

	return (
		<div className={rangeSliderClasses}>

			<Slider
				className="range-slider__slider"
				mode={1}
				step={step}
				domain={domain}
				onChange={onChange}
				values={values}
			>
				<Rail>
					{({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
				</Rail>
				<Handles>
					{({ handles, getHandleProps }) => (
						<div className="slider-handles">
							{handles.map((handle) => (
								<Handle
									key={handle.id}
									handle={handle}
									domain={domain}
									getHandleProps={getHandleProps}
								/>
							))}
						</div>
					)}
				</Handles>
				<Tracks right={false}>
					{({ tracks, getTrackProps }) => (
						<div className="slider-tracks">
							{tracks.map(({ id, source, target }) => (
								<ProgressLine
									key={id}
									source={source}
									target={target}
									getTrackProps={getTrackProps}
								/>
							))}
						</div>
					)}
				</Tracks>
			</Slider>

		</div>
	)
}

export default RangeSlider