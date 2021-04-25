import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const ProjectsPage: React.FC = () => {
	return (
		<>
			<TopMenu menuType="auth" />
			<div className="content-area">
				<h1>Страница со списком сайтов пользователя</h1>
			</div>
			<Footer />
		</>
	)
}

export default ProjectsPage