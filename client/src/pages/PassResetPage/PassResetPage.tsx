import React, { useEffect } from 'react'
import './PassResetPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import ResetForm from '../../components/Auth/ResetForm/ResetForm'
import Alert from '../../components/UI/Alert/Alert'
import PopUp from '../../components/HOC/PopUp/PopUp'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { usePopup } from '../../hooks/usePopup.hook'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { useHistory } from 'react-router-dom'

const PassResetPage: React.FC = () => {

	const messagePopup = usePopup(false, 'blur')
	const history = useHistory()

	const { message, messageType} = useTypedSelector(state => state.auth)
	const { clearRegisterMessage } = useActions()

	useEffect(() => { 

		const alertDelay: number = 2000

		if (message && messageType === 'success') {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
				history.push('/login')
			}, alertDelay)
		}
		
		if (message) {
			messagePopup.showHide(alertDelay)
			setTimeout(() => {
				clearRegisterMessage()
			}, alertDelay)
		}
		// eslint-disable-next-line
	}, [message, messageType])


	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>
				<TopMenu menuType="back-to-main" />
				<div className="content-area">

					<div className="pass-reset-page">
						<ResetForm parentClass="pass-reset-page" />
					</div>

				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default PassResetPage