import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Backdrop.scss'

interface IBackdrop {
	// modClass?: string[]
	modClass: ['popup-blur'] | ['alert'] | ['popup-solid']
}

const Backdrop: React.FC<IBackdrop> = ({ children, modClass }) => {

	const backdropClasses = useCreateClassName('popup-backdrop', null, modClass)
	const darkeningClasses = useCreateClassName('popup-backdrop__darkening', null, modClass)

	return (
		<>
			<div className={backdropClasses}>
				<div className={darkeningClasses}></div>
				{children}
			</div>
		</>
	)
}

export default Backdrop