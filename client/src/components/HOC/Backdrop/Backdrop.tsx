import classNames from 'classnames'
import React from 'react'
import './Backdrop.scss'

interface IBackdrop {
	isOpen?: boolean
	type:  'blur' | 'solid'
}

const Backdrop: React.FC<IBackdrop> = ({ children, isOpen, type }) => {

	let backdropClasses = 'popup-backdrop_simple'
	let darkeningClasses = 'popup-backdrop__darkening'

	if (type === 'blur') {
		darkeningClasses = classNames({
			'popup-backdrop__darkening': true,
			'popup-backdrop__darkening_blur popup-backdrop__darkening_show': isOpen
		})
		backdropClasses = classNames({
			'popup-backdrop': true,
			'popup-backdrop_show': isOpen,
		})
	}
	
	if (type === 'solid') {
		darkeningClasses = classNames({
			'popup-backdrop__darkening': true,
			'popup-backdrop__darkening_solid popup-backdrop__darkening_show': isOpen
		})
		backdropClasses = classNames({
			'popup-backdrop_solid': true,
			'popup-backdrop_solid popup-backdrop_show': isOpen
		})
	}

	console.log('Новый рендер')

	return (
		<div className={backdropClasses}>
			<div className={darkeningClasses}></div>
			{children}
		</div>
	)
}

export default Backdrop