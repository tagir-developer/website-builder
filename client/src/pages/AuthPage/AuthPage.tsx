import React from 'react'
import './AuthPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import Login from '../../components/Auth/Login/Login'

const AuthPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" />
			<div className="content-area">

				<div className="auth-page">
					<Login parentClass="auth-page" />
				</div>

			</div>
			<Footer />
		</>
	)
}

export default AuthPage