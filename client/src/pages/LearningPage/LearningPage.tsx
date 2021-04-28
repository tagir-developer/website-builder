import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

//! Здесь в зависимости от авторизованности выводить разный тип меню

const LearningPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="back-to-main" /> 
			<div className="content-area">
				<h1>Видеоинструкция по работе с сервисом</h1>
			</div>
			<Footer />
		</>
	)
}

export default LearningPage