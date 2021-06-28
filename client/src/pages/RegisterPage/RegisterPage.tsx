import React, { useEffect } from 'react'
import RegisterForm from '../../components/Auth/Registration/RegisterForm'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Alert from '../../components/UI/Alert/Alert'
import Footer from '../../components/UI/Footer/Footer'
import PopUp from '../../components/HOC/PopUp/PopUp'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useTypedSelector } from '../../hooks/reduxHooks'
import { usePopup } from '../../hooks/usePopup.hook'
import './RegisterPage.scss'

const RegisterPage: React.FC = () => {

	const messagePopup = usePopup(false, 'blur')

	const { error, message } = useTypedSelector(state => state.auth)

	useEffect(() => {
		// const alert = <Alert type={"success"} message={message} />
		message && messagePopup.showHide(2000)
		console.log('USE EFFECT WORK')
	}, [message])

	console.log('ERROR', error)
	console.log('MESSAGE', message)


	return (
		<>
			<PopUp {...messagePopup.popupProps} transparent={true}>
				<Alert type={"success"} message={message} />
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

export default RegisterPage