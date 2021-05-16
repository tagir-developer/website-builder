import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import LeftMenu from '../../Navigation/leftMenu/LeftMenu'
import Backdrop from '../Backdrop/Backdrop'
import './PopUp.scss'

interface IPopUp {
	parentClass?: string
	type: 'blur' | 'solid'
	modClass?: string[]
	isOpen: boolean
	closeHandler: (param: any) => any
	component: () => JSX.Element
}

const PopUp: React.FC<IPopUp> = ({ parentClass, modClass, type, isOpen, children, closeHandler, component }) => {

	const modClasses: string[] = modClass ? modClass.concat([type]) : [type]

	const popupClasses = useCreateClassName('popup', parentClass)
	const popupContentClasses = useCreateClassName('popup__content', null, modClasses)

	const showChildren = (): JSX.Element => {
		if (type === 'blur') return <Backdrop modClass={['popup-blur']}>{children}</Backdrop>
		if (type === 'solid') return <Backdrop modClass={['popup-solid']}>{children}</Backdrop>
		return <>{children}</>
	}

	const showChildrenTest = (): JSX.Element => {
		if (!isOpen) return <>{children}</>
		if (type === 'blur') return <Backdrop modClass={['popup-blur']}>{children}</Backdrop>
		if (type === 'solid') return <Backdrop modClass={['popup-solid']}>{children}</Backdrop>
		return <Backdrop modClass={['popup-solid']}>{children}</Backdrop>
	}

	// ! 1) Нужно передавать компонент в пропсах
	// ! 2) Нужно отключить прокрутку заднего фона


	// if (isOpen) {
	// 	return (
	// 		<>
	// 			<div className={popupClasses}>
	// 				<div className={popupContentClasses}>
	// 					<div onClick={closeHandler} className="popup__close-button"></div>
	// 					{component()}
	// 				</div>
	// 			</div>
	// 			{showChildren()}
	// 		</>
	// 	)
	// } else {
	// 	return (
	// 		<>
	// 			{children}
	// 		</>
	// 	)
	// }

	console.log('OPEN', isOpen)

	return (
		<>
			<CSSTransition
				in={isOpen}
				timeout={200}
				classNames="popup__show"
			>
				<div className={popupClasses}>
					<div className={popupContentClasses}>
						<div onClick={closeHandler} className="popup__close-button"></div>
						{component()}
					</div>
				</div>
			</CSSTransition>
			{/* {showChildrenTest()} */}
		</>
	)


}

export default PopUp