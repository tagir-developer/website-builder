import React from 'react'
import TopMenu from '../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../components/UI/Footer/Footer'

const PasswordRecoveryPage: React.FC = () => {
	return (
		<>
			<TopMenu />
			<div className="content-area">
				<h1>Password Recovery Page</h1>
			</div>
			<Footer />
		</>
	)
}

export default PasswordRecoveryPage