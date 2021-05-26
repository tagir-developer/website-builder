import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import Footer from '../../components/UI/Footer/Footer'
import ProjectCard from '../../components/UI/ProjectCard/ProjectCard'
import './ProjectsPage.scss'

const ProjectsPage: React.FC = () => {

	const projects = [
		{
			name: 'Опубликованный сайт',
			pusblished: true,
			link: '/learning',
			hasPages: true
		},
		{
			name: 'Неопубликованный сайт',
			pusblished: false,
			link: '/learning',
			hasPages: true
		},
		{
			name: 'Сайт без страниц',
			pusblished: false,
			link: '/learning',
			hasPages: false
		}
	]


	return (
		<>
			<TopMenu menuType="auth" />
			<div className="content-area">
				<div className="projects-page">

					<AddNewButton parentClass="projects-page" handler={() => { }} />

					{
						projects.map((i) => {
							return (
								<ProjectCard
									parentClass="projects-page"
									title={i.name}
									published={i.pusblished}
									link={i.link}
									hasPages={i.hasPages}
								/>
							)
						})
					}

				</div>
				{/* <NavLink to={"/" + 'apple'}>APPLE</NavLink>
			<NavLink to={"/" + 'orange'}>ORANGE</NavLink>			 */}
			</div>
			<Footer />
		</>
	)
}

export default ProjectsPage