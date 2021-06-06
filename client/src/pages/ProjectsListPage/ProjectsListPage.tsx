import React, { useState } from 'react'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import PopUp from '../../components/HOC/PopUp/PopUp'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import CreateProject from '../../components/UI/CreateProject/CreateProject'
import Footer from '../../components/UI/Footer/Footer'
import ProjectCard from '../../components/UI/ProjectCard/ProjectCard'
import { usePopup } from '../../hooks/usePopup.hook'
import './ProjectsListPage.scss'

const ProjectsListPage: React.FC = () => {

	const popup = usePopup(false, "solid")

	const [projects, setProjects] = useState([{
		name: 'Опубликованный сайт',
		pusblished: true,
		link: '/project-1',
		hasPages: true
	},
	{
		name: 'Неопубликованный сайт',
		pusblished: false,
		link: '/project-1',
		hasPages: true
	},
	{
		name: 'Сайт без страниц',
		pusblished: false,
		link: '/project-1',
		hasPages: false
	}])

	const addNewProject = () => {

		setProjects([{
			name: 'Опубликованный сайт',
			pusblished: true,
			link: '/project-1',
			hasPages: true
		},
		{
			name: 'Неопубликованный сайт',
			pusblished: false,
			link: '/project-1',
			hasPages: true
		},
		{
			name: 'Сайт без страниц',
			pusblished: false,
			link: '/project-1',
			hasPages: false
		},
		{
			name: 'Новый сайт',
			pusblished: false,
			link: '/project-1',
			hasPages: false
		}
	])

		popup.handler()

	}

	return (
		<>
			<PopUp {...popup.popupProps} withTitle="Cоздание сайта">
				<CreateProject handler={addNewProject} />
			</PopUp>

			<Backdrop {...popup.backdropProps}>
				<TopMenu menuType="auth" />
				<div className="content-area">
					<div className="projects-list-page">

						<AddNewButton 
							parentClass="projects-list-page" 
							handler={popup.handler}
							title="Создать новый сайт"
						/>

						{
							projects.map((i, index) => {
								return (
									<ProjectCard
										key={'project-card' + index}
										parentClass="projects-list-page"
										title={i.name}
										published={i.pusblished}
										link={i.link}
										hasPages={i.hasPages}
									/>
								)
							})
						}

					</div>
				</div>
				<Footer />
			</Backdrop>
		</>
	)
}

export default ProjectsListPage