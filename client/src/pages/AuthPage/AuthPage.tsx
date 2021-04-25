import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const AuthPage: React.FC = () => {
	return (
		<>
			<TopMenu />
			<div className="content-area">
				<h1>Auth page</h1>
			</div>
			<Footer />
		</>
	)
}

export default AuthPage