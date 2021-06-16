import React, { useState } from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ColorPicker.scss'
import { ChromePicker } from 'react-color'
import { CSSTransition } from 'react-transition-group'
import SmallButton from '../../UI/SmallButton/SmallButton'

interface IColorPicker {
	parentClass?: string
	modClass?: string[]
	initialColor: string
}

const ColorPicker: React.FC<IColorPicker> = ({ children, parentClass, modClass, initialColor }) => {

	const colorPickerClasses = useCreateClassName('color-picker', parentClass)

	const [btnColor, setBtnColor] = useState<string>(initialColor)
	const [showPalete, setShowPalete] = useState<boolean>(false)

	const cancelHandler = (): void => {
		setBtnColor(initialColor)
		setShowPalete(false)
	}

	return (
		<div className={colorPickerClasses}>
			<div className="color-picker__label">{children}</div>

			<div className="color-picker__container">
				<div className="color-picker__palette-window">
					<div className="color-picker__palette-color" style={{ background: btnColor }}></div>
				</div>

				<div className="color-picker__palette-button" onClick={() => setShowPalete(true)}></div>


				<div className="color-picker__popup-container">
					<CSSTransition
						in={showPalete}
						timeout={400}
						classNames="palette-popup_show"
						mountOnEnter
						unmountOnExit
					>
						<div className="color-picker__palette-popup palette-popup">
							<ChromePicker
								color={btnColor}
								onChangeComplete={color => setBtnColor(color.hex)}
							/>
							<SmallButton parentClass="palette-popup" handler={cancelHandler}>Отмена</SmallButton>
							<SmallButton parentClass="palette-popup" handler={() => setShowPalete(false)}>Сохранить</SmallButton>
						</div>
					</CSSTransition>
				</div>

			</div>
		</div>
	)
}

export default ColorPicker