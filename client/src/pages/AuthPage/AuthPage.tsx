import React, { useEffect } from 'react'
import './AuthPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import Login from '../../components/Auth/Login/Login'
import Alert from '../../components/UI/Alert/Alert'
import PopUp from '../../components/HOC/PopUp/PopUp'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { usePopup } from '../../hooks/usePopup.hook'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { useHistory } from 'react-router-dom'

const AuthPage: React.FC = () => {

	const messagePopup = usePopup(false, 'blur')

	const { message, messageType, errors } = useTypedSelector(state => state.auth)
	const { clearRegisterMessage } = useActions()

	const history = useHistory()

	useEffect(() => {

		const alertDelay: number = 2000

		// 	if (message) {
		// 		messagePopup.showHide(alertDelay)
		// 		setTimeout(() => {
		// 			clearRegisterMessage()
		// 		}, alertDelay)
		// 	}
		// }, [message])

		if (message && messageType === 'success') {
			clearRegisterMessage()
			history.push('/')
		}


		if (message) {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
			}, alertDelay)

		}

	}, [message])

	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>
				<TopMenu menuType="back-to-main" />
				<div className="content-area">

					<div className="auth-page">
						<Login parentClass="auth-page" />
					</div>

				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default AuthPage