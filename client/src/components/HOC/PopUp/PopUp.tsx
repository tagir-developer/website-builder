import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './PopUp.scss'

interface IPopUp {
	parentClass?: string
	type: 'blur' | 'solid'
	modClass?: string[]
	isOpen: boolean
	handler: (param?: any) => void
	transparent?: boolean
	withTitle?: string
	backdropBlocked?: boolean
}

const PopUp: React.FC<IPopUp> = ({ parentClass, modClass, type, isOpen, children, handler, transparent, withTitle, backdropBlocked }) => {

	const modClasses: string[] = modClass ? modClass.concat([type]) : [type]

	const popupClasses = useCreateClassName('popup', parentClass, modClasses)
	const popupContentClasses = useCreateClassName('popup__content', null, modClasses)

	const stopPropagation = (event: React.MouseEvent<HTMLDivElement>): void => {
		event.preventDefault()
		event.stopPropagation()
	}


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
				<div className="popup__close-wrapper" onClick={e => stopPropagation(e)}></div>

					{children}
				</div>
			</CSSTransition>
		)
	} else if (withTitle) {
		return (
			<CSSTransition
				in={isOpen}
				timeout={400}
				classNames="popup_show"
				mountOnEnter
				unmountOnExit
			>
				<div className={popupClasses}>
					{ !backdropBlocked ? <div className="popup__close-wrapper" onClick={handler}></div> : null }
					<div className={popupContentClasses}>
						<div onClick={handler} className="popup__close-button"></div>
						<div className="popup__title">{withTitle}</div>
						{children}
					</div>
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
					{ !backdropBlocked ? <div className="popup__close-wrapper" onClick={handler}></div> : null }
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