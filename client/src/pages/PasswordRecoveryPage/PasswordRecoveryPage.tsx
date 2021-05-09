import React, { useState } from 'react'
import ResetForm from '../../components/Auth/Reset/ResetForm'
import Alert from '../../components/HOC/Alert/Alert'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import './PasswordRecoveryPage.scss'

const PasswordRecoveryPage: React.FC = () => {

	const [openAlert, setOpenAlert] = useState(false)

	const alertHandler = () => {
		setOpenAlert((perv) => !perv)
		setTimeout(() => setOpenAlert((perv) => !perv), 3000)
	}

	return (
		<>
			<Alert type={"success"} modClass={["tester"]} isOpen={openAlert} message="Ваш пароль успешно изменен!">

			<TopMenu menuType="back-to-main" />
			<div className="content-area">
			<div className="reset-page">
					<ResetForm parentClass="reset-page" alertHandler={alertHandler} />
				</div>
			</div>
			<Footer />

			</Alert>

		</>
	)
}

export default PasswordRecoveryPage