import React, { useEffect } from 'react'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import { usePopup } from '../../../hooks/usePopup.hook'
import Alert from '../../UI/Alert/Alert'
import Backdrop from '../Backdrop/Backdrop'
import PopUp from '../PopUp/PopUp'

interface IAlertMessage {
	successFunc?: Function
	alertDelay?: number
}

const AlertMessage: React.FC<IAlertMessage> = ({ children, alertDelay = 2000, successFunc = () => {} }) => {

	const messagePopup = usePopup(false, 'blur')

	const { message, messageType } = useTypedSelector(state => state.alert)
	const { alertClearMessage, alertClearErrors } = useActions()

	useEffect(() => {

		if (message) {
			messagePopup.showHide(alertDelay)	 
				setTimeout(() => {
					alertClearMessage()
					if (messageType === 'success') successFunc()
				}, alertDelay)
			
		}
		// eslint-disable-next-line
	}, [message])

	useEffect(() => {
		return () => {
			alertClearErrors()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>
				{children}
			</Backdrop>
		</>
	)
}

export default AlertMessage