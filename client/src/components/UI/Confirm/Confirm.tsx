import React from 'react'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import SmallButton from '../SmallButton/SmallButton'
import './Confirm.scss'


interface IConfirm {
	parentClass?: string
	modClass?: string[]
	handler: {
		setPopup: (param: boolean) => void
		confirmFunc: (param: boolean) => void
		isConfirm: boolean
	}
	successFunc?: Function
}

const Confirm: React.FC<IConfirm> = ({ parentClass, modClass, children, handler, successFunc }) => {

	const confirmClasses = useCreateClassName('confirm', parentClass, modClass)

	const confirmHandler = (value: boolean): void => {
		handler.confirmFunc(value)
		handler.setPopup(false)
		if (successFunc && value) successFunc()
	}

	return (
		<div className={confirmClasses}>
			<div className="confirm__content">
				<div className="confirm__message">{children}</div>
				<div className="confirm__buttons-container">
					<SmallButton parentClass="confirm" handler={() => confirmHandler(false)}> Отмена </SmallButton>
					<SmallButton parentClass="confirm" handler={() => confirmHandler(true)}> Да </SmallButton>
				</div>
			</div>
		</div>
	)
}

export default Confirm