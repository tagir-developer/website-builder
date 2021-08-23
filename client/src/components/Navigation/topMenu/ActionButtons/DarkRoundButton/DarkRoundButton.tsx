import React, { MouseEventHandler } from 'react'
import './DarkRoundButton.scss'
import {useCreateClassName} from '../../../../../hooks/createClassName.hook'

interface IDarkRoundButton {
	parentClass?: string
	modClass?: string[]
	title?: string
	handler: MouseEventHandler<HTMLDivElement>
}

const DarkRoundButton: React.FC<IDarkRoundButton> = ({ parentClass, modClass, title, handler}) => {

	const darkRoundButtonClasses = useCreateClassName('dark-round-button', parentClass)
	const iconClasses = useCreateClassName('dark-round-button__icon', null, modClass)

	return (
			<div 
				className={darkRoundButtonClasses} 
				title={title}
				onClick={handler}
			>
				<div className="dark-round-button__button">
					<div className={iconClasses}></div>
				</div>
			</div>
	)
}

export default DarkRoundButton