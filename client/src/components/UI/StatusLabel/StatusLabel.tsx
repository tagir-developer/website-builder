import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './StatusLabel.scss'

interface IStatusLabel {
	parentClass: string
	modClass?: string[]
}

const StatusLabel: React.FC<IStatusLabel> = ({children, parentClass, modClass}) => {

	const statusLabelClasses = useCreateClassName('status-label', parentClass, modClass)

	return (
		<div className={statusLabelClasses}>
			{children}
		</div>
	)
}

export default StatusLabel