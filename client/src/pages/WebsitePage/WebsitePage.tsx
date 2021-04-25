import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const WebsitePage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="auth-project" />
			<div className="content-area">
				<h1>Страница отдельного проекта со списком страниц</h1>
			</div>
			<Footer />
		</>
	)
}

export default WebsitePage