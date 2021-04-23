import React from 'react'
import './DarkRoundButtonActive.scss'
import {useCreateClassName} from '../../../../../hooks/createClassName.hook'
import classNames from 'classnames'

interface IDarkRoundButtonActive {
	parentClass?: string
	modClass?: string[]
	activeClass?: string[]
}

const DarkRoundButtonActive: React.FC<IDarkRoundButtonActive> = ({ parentClass, modClass, activeClass}) => {

	const darkRoundButtonClasses = useCreateClassName('dark-round-button-active', parentClass)
	const iconClasses = useCreateClassName('dark-round-button-active__icon', null, modClass)



	return (
			<div className={darkRoundButtonClasses}>
				<div className="dark-round-button-active__button">
					<div className={iconClasses}></div>
				</div>
			</div>
	)
}

export default DarkRoundButtonActive