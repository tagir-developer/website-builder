import React from 'react'
import { NavLink } from 'react-router-dom'
import TopMenu from '../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../components/UI/Footer/Footer'

const LandingPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="preview" />
			<div className="content-area">
				<h1>Landing Page</h1>
				<NavLink to="/recovery" >Восстановление пароля</NavLink>
			</div>
			<Footer />
		</>
	)
}

export default LandingPage