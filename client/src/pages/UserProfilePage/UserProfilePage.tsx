import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const UserProfilePage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" /> 			
			<div className="content-area">
				<h1>Профиль пользователя</h1>
			</div>
			<Footer />
		</>
	)
}

export default UserProfilePage