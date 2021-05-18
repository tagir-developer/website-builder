import React from 'react'
import ResetForm from '../../components/Auth/Reset/ResetForm'
import Alert from '../../components/HOC/Alert/Alert'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { usePopup } from '../../hooks/usePopup.hook'
import './PasswordRecoveryPage.scss'

const PasswordRecoveryPage: React.FC = () => {

	const popup = usePopup(false, 'blur')

	return (
		<>
			<PopUp {...popup.popupProps} transparent={true}>
				<Alert type={"success"} message="Ваш пароль успешно изменен!" />
			</PopUp>

			<Backdrop {...popup.backdropProps}>

				<TopMenu menuType="back-to-main" />
				<div className="content-area">
					<div className="reset-page">
						<ResetForm parentClass="reset-page" alertHandler={() => popup.showHide(3000)} />
					</div>
				</div>
				<Footer />

			</Backdrop>
		</>
	)
}

export default PasswordRecoveryPage