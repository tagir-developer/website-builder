import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './Alert.scss'

interface IAlert {
	parentClass?: string
	type: 'basic' | 'success' | 'warning' | 'danger'
	modClass?: string[]
	isOpen?: boolean
	message: string
}

const Alert: React.FC<IAlert> = ({ parentClass, modClass, type, isOpen, message, children }) => {

	const modClasses: string[] = modClass ? modClass.concat([type]) : [type]

	const alertClasses = useCreateClassName('alert-popup', parentClass, modClasses)


	return (
		<div className={alertClasses}>
			<div className="alert-popup__content">
				{message}
			</div>
		</div>
	)

}

export default Alert