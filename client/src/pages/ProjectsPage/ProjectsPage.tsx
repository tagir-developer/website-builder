import React, { useEffect, useState } from 'react'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import CreateProject from '../../components/UI/CreateProject/CreateProject'
import Footer from '../../components/UI/Footer/Footer'
import ProjectCard from '../../components/UI/ProjectCard/ProjectCard'
import { usePopup } from '../../hooks/usePopup.hook'
import './ProjectsPage.scss'

const ProjectsPage: React.FC = () => {

	const popup = usePopup(false, "solid")

	const [projects, setProjects] = useState([{
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
	}])



	const addNewProject = () => {
		// projects.push({
		// 	name: 'Новый сайт',
		// 	pusblished: false,
		// 	link: '/learning',
		// 	hasPages: false
		// })



		setProjects([{
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
		},
		{
			name: 'Новый сайт',
			pusblished: false,
			link: '/learning',
			hasPages: false
		}
	])

		popup.handler()


	}

	console.log('New render')

	return (
		<>
			<PopUp {...popup.popupProps} withTitle="Cоздание сайта">
				<CreateProject handler={addNewProject} />
			</PopUp>

			<Backdrop {...popup.backdropProps}>
				<TopMenu menuType="auth" />
				<div className="content-area">
					<div className="projects-page">

						<AddNewButton parentClass="projects-page" handler={popup.handler} />

						{
							projects.map((i, index) => {
								return (
									<ProjectCard
										key={'project-card' + index}
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
			</Backdrop>
		</>
	)
}

export default ProjectsPage