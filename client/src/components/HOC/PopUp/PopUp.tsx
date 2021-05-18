import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './PopUp.scss'

interface IPopUp {
	parentClass?: string
	type: 'blur' | 'solid'
	modClass?: string[]
	isOpen: boolean
	handler: () => void
	transparent?: boolean
}

const PopUp: React.FC<IPopUp> = ({ parentClass, modClass, type, isOpen, children, handler, transparent }) => {

	const modClasses: string[] = modClass ? modClass.concat([type]) : [type]

	const popupClasses = useCreateClassName('popup', parentClass, modClasses)
	const popupContentClasses = useCreateClassName('popup__content', null, modClasses)

	if (transparent) {
		return (
			<CSSTransition
				in={isOpen}
				timeout={400}
				classNames="popup_show"
				mountOnEnter
				unmountOnExit
			>
				<div className={popupClasses}>
					{children}
				</div>
			</CSSTransition>
		)
	} else {
		return (
			<CSSTransition
				in={isOpen}
				timeout={400}
				classNames="popup_show"
				mountOnEnter
				unmountOnExit
			>
				<div className={popupClasses}>
					<div className="popup__close-wrapper" onClick={handler}></div>
					<div className={popupContentClasses}>
						<div onClick={handler} className="popup__close-button"></div>
						{children}
					</div>
				</div>
			</CSSTransition>
		)
	}

}

export default PopUp