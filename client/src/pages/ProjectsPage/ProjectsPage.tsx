import React from 'react'
import { NavLink } from 'react-router-dom'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'

const ProjectsPage: React.FC = () => {

	const array = [
		{name: 'apple'},
		{name: 'orange'},
		{name: 'banana'},
	]

	return (
		<>
			<TopMenu menuType="auth" />
			<div className="content-area">
				<h1>Страница со списком сайтов пользователя</h1>
				{/* {array.map((i) => {
					return (
						<>
						<NavLink to={"/pr/" + i.name}>{i.name}</NavLink>
						<div></div>
						</>
					)
				})} */}

			<NavLink to={"/" + 'apple'}>APPLE</NavLink>
			<div></div>
			<NavLink to={"/" + 'orange'}>ORANGE</NavLink>
				
				
				
			</div>
			<Footer />
		</>
	)
}

export default ProjectsPage