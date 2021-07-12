import React from 'react'
import RecoveryForm from '../../components/Auth/RecoveryForm/RecoveryForm'
import Alert from '../../components/UI/Alert/Alert'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { usePopup } from '../../hooks/usePopup.hook'
import './PasswordRecoveryPage.scss'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import Loader from '../../components/UI/Loader/Loader'
import Error from '../../components/UI/Error/Error'

const PasswordRecoveryPage: React.FC = () => {

	const messagePopup = usePopup(false, 'blur')
	const history = useHistory()

	const { token } = useParams<{ token: string }>()

	const { resetData, message, messageType, errors, loading } = useTypedSelector(state => state.auth)
	const { resetTokenCheck, clearRegisterMessage } = useActions()

	useEffect(() => {
		resetTokenCheck(token)
	}, [])

	useEffect(() => {

		const alertDelay: number = 2000

		if (message && messageType === 'success') {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
				history.push('/login')
			}, alertDelay)
		}

		if (message && messageType === 'warning') {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
				history.push('/reset')
			}, alertDelay)
		}

		if (message && !!errors.length) {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
			}, alertDelay)
		}
	}, [message, messageType])

	const errorHandler = () => {
		clearRegisterMessage()
		history.push('/reset')
	}

	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>

				<TopMenu menuType="back-to-main" />
				<div className="content-area">
					<div className="password-recovery-page">

						{ loading
						? <Loader />
						: !Object.keys(resetData).length
							? <Error 
								handler={errorHandler} 
								parentClass="password-recovery-page" 
								title="Произошла ошибка!"
							>
								{message}
							</Error>
							: <RecoveryForm parentClass="password-recovery-page" />
						}

					</div>
				</div>
				<Footer />

			</Backdrop>
		</>
	)
}

export default PasswordRecoveryPage