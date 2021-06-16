import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './PalettePopup.scss'
import { ChromePicker } from 'react-color'
import { CSSTransition } from 'react-transition-group'
import SmallButton from '../SmallButton/SmallButton'

interface IPalettePopup {
	parentClass?: string
	isOpen: boolean
	color: string
	onChangeComplete: (param: { hex: string })=> void
	cancelHandler: () => void
	closePalette: () => void
}

const PalettePopup: React.FC<IPalettePopup> = ({ parentClass, isOpen, color, onChangeComplete, cancelHandler, closePalette }) => {

	const palettePopupClasses = useCreateClassName('palette-popup', parentClass)

	return (
		<CSSTransition
			in={isOpen}
			timeout={400}
			classNames="palette-popup_show"
			mountOnEnter
			unmountOnExit
		>
			<div className={palettePopupClasses}>
				<ChromePicker
					color={color}
					onChangeComplete={onChangeComplete}
				/>
				<SmallButton parentClass="palette-popup" handler={cancelHandler}>Отмена</SmallButton>
				<SmallButton parentClass="palette-popup" handler={closePalette}>Сохранить</SmallButton>
			</div>
		</CSSTransition>
	)
}

export default PalettePopup