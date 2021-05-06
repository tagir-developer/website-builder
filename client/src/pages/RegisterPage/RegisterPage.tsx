import React from 'react'
import RegisterForm from '../../components/Auth/Registration/RegisterForm'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import './RegisterPage.scss'

const RegisterPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">
			<div className="register-page">
					<RegisterForm parentClass="register-page" />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default RegisterPage