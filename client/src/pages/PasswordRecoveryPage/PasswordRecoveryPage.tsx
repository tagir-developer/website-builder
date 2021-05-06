import React from 'react'
import ResetForm from '../../components/Auth/Reset/ResetForm'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import './PasswordRecoveryPage.scss'

const PasswordRecoveryPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">
			<div className="reset-page">
					<ResetForm parentClass="reset-page" />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default PasswordRecoveryPage