import React from 'react'
import './DarkRoundButton.scss'
import {useCreateClassName} from '../../../../../hooks/createClassName.hook'

interface IDarkRoundButton {
	parentClass?: string
	modClass?: string[]
	title?: string
}

const DarkRoundButton: React.FC<IDarkRoundButton> = ({ parentClass, modClass, title}) => {

	const darkRoundButtonClasses = useCreateClassName('dark-round-button', parentClass)
	const iconClasses = useCreateClassName('dark-round-button__icon', null, modClass)

	return (
			<div className={darkRoundButtonClasses} title={title}>
				<div className="dark-round-button__button">
					<div className={iconClasses}></div>
				</div>
			</div>
	)
}

export default DarkRoundButton