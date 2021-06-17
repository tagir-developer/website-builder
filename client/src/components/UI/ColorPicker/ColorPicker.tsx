import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ColorPicker.scss'
import PalettePopup from '../PalettePopup/PalettePopup'
import { useColorPicker } from '../../../hooks/useColorPicker.hook'

interface IColorPicker {
	parentClass?: string
	modClass?: string[]
	initialColor: string
}

const ColorPicker: React.FC<IColorPicker> = ({ children, parentClass, modClass, initialColor }) => {

	const colorPickerClasses = useCreateClassName('color-picker', parentClass)

	const colorPicker = useColorPicker(initialColor)

	return (
		<div className={colorPickerClasses}>
			<div className="color-picker__label">{children}</div>

			<div className="color-picker__container">

				<div className="color-picker__col-palette">
					<div className="color-picker__palette-window">
						<div className="color-picker__palette-color" style={{ background: colorPicker.color }}></div>
					</div>
					<div className="color-picker__palette-button" onClick={colorPicker.openPalette}></div>
				</div>


				<div className="color-picker__popup-container">

					<PalettePopup parentClass="color-picker" {...colorPicker.bind} />

				</div>

			</div>
		</div>
	)
}

export default ColorPicker