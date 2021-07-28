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

const AuthPage: React.FC = () => {

	const messagePopup = usePopup(false, 'blur')

	const { message, messageType, errors } = useTypedSelector(state => state.auth)
	const { clearRegisterMessage, authClearErrors } = useActions()

	useEffect(() => {

		const alertDelay: number = 2000

		if (message && !!errors.length) {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
			}, alertDelay)

		}
		// eslint-disable-next-line
	}, [message])

	useEffect(() => {
		return () => {
			clearRegisterMessage()
			authClearErrors()
		}
		// eslint-disable-next-line
	}, [])

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