import React from 'react'
import './DarkRoundButtonActive.scss'
import {useCreateClassName} from '../../../../../hooks/createClassName.hook'

interface IDarkRoundButtonActive {
	parentClass?: string
	iconClass: string
	isActive?: boolean
}

const DarkRoundButtonActive: React.FC<IDarkRoundButtonActive> = ({ parentClass, iconClass, isActive=false}) => {

	const createIconClass = isActive ? [iconClass + '-active'] : [iconClass]

	const darkRoundButtonClasses = useCreateClassName('dark-round-button-active', parentClass)
	const iconClasses = useCreateClassName('dark-round-button-active__icon', null, createIconClass)

	return (
			<div className={darkRoundButtonClasses}>
				<div className="dark-round-button-active__button">
					<div className={iconClasses}></div>
				</div>
			</div>
	)
}

export default DarkRoundButtonActive