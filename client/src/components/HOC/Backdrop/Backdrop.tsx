import classNames from 'classnames'
import React from 'react'
import './Backdrop.scss'

interface IBackdrop {
	isOpen?: boolean
	type: 'blur' | 'solid'
	handler?: (param?: any) => void
	withoutPadding?: boolean
}

const Backdrop: React.FC<IBackdrop> = ({ children, isOpen, type, handler, withoutPadding }) => {

	let backdropClasses = withoutPadding ? 'popup-backdrop popup-backdrop_simple popup-backdrop_without-padding' : 'popup-backdrop popup-backdrop_simple'
	let darkeningClasses = 'popup-backdrop__darkening'

	if (type === 'blur') {
		darkeningClasses = classNames({
			'popup-backdrop__darkening': true,
			'popup-backdrop__darkening_blur popup-backdrop__darkening_show': isOpen
		})
		backdropClasses = classNames({
			'popup-backdrop': true,
			'popup-backdrop_without-padding': withoutPadding, // Добавили, чтобы убрать отступ, если не предполагается скрытие прокрутки
			'popup-backdrop_show': isOpen,
		})
	}

	if (type === 'solid') {
		darkeningClasses = classNames({
			'popup-backdrop__darkening': true,
			'popup-backdrop__darkening_solid popup-backdrop__darkening_show': isOpen
		})
		backdropClasses = classNames({
			'popup-backdrop': true,
			'popup-backdrop_without-padding': withoutPadding,
			'popup-backdrop_solid popup-backdrop_show': isOpen
		})
	}

	return (
		<div className={backdropClasses}>
			<div className={darkeningClasses} onClick={handler}></div>
			{children}
		</div>
	)
}

export default Backdrop