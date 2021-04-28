import React from 'react'
import { NavLink } from 'react-router-dom'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const ProjectsPage: React.FC = () => {

	const name = 'apple'

	return (
		<>
			<TopMenu menuType="auth" />
			<div className="content-area">
				<h1>Страница со списком сайтов пользователя</h1>
				<NavLink to={"/" + name}>Ссылка на проект Апельсин</NavLink>
				<div></div>
				<NavLink to="/apple">Ссылка на проект Яблоко</NavLink>
				
			</div>
			<Footer />
		</>
	)
}

export default ProjectsPage