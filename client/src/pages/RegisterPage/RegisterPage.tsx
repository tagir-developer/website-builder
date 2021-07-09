import React, { useEffect } from 'react'
import RegisterForm from '../../components/Auth/Registration/RegisterForm'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Alert from '../../components/UI/Alert/Alert'
import Footer from '../../components/UI/Footer/Footer'
import PopUp from '../../components/HOC/PopUp/PopUp'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { usePopup } from '../../hooks/usePopup.hook'
import './RegisterPage.scss'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const RegisterPage: React.FC<RouteComponentProps> = ({ history }) => {

	const messagePopup = usePopup(false, 'blur')

	const { message, messageType, loading } = useTypedSelector(state => state.auth)
	const {clearRegisterMessage} = useActions()

	useEffect(() => {
		const alertDelay: number = 2000

		if (message && !loading) messagePopup.showHide(alertDelay)

		// if (messageType === 'success') {
			
		// 	setTimeout(() => {
		// 		clearRegisterMessage()
		// 		history.push('/login')
		// 	}, alertDelay)
		// }
	}, [message, messageType, loading])

	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={messageType} message={message} />
			</PopUp>

			<Backdrop {...messagePopup.backdropProps}>

				<TopMenu menuType="back-to-main" />
				<div className="content-area">
					<div className="register-page">
						<RegisterForm parentClass="register-page" />
					</div>
				</div>
				<Footer />

			</Backdrop>
		</>
	)
}

export default withRouter(RegisterPage)