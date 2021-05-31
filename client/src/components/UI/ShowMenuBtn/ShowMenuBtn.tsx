import classNames from 'classnames'
import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ShowMenuBtn.scss'

interface IShowMenuBtn {
	parentClass?: string
	modClass?: string[]
	handler?: () => void
}

const ShowMenuBtn: React.FC<IShowMenuBtn> = ({parentClass, modClass, handler}) => {

	// const [isOpen, isOpenHandler] = useState<boolean>(false)

	const ShowMenuBtnClasses = useCreateClassName('show-menu-btn', parentClass, modClass)

	const toggleClasses = classNames({
		'show-menu-btn__icon': true,
	})

	const toggleHandler = () => {
		// isOpenHandler(prev => !prev)
		if (handler) handler()
	}

	return (
		<div 
			className={ShowMenuBtnClasses}
			onClick={toggleHandler}
		>
			<div className={toggleClasses}></div>
		</div>
	)
}

export default ShowMenuBtn