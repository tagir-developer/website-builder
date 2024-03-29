import React from 'react'
import './ProjectCard.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import Button from '../Button/Button'
import SecondaryButton from '../SecondaryButton/SecondaryButton'
import StatusLabel from '../StatusLabel/StatusLabel'
import CopyLink from '../CopyLink/CopyLink'
import { RouteComponentProps, withRouter } from 'react-router'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'

interface IProjectCard extends RouteComponentProps<any> {
	parentClass?: string
	modClass?: string[]
	title: string
	published: boolean
	link: string
	hasPages: boolean
	generatedProjectLink: string
}

const ProjectCard: React.FC<IProjectCard> = ({ parentClass, modClass, title, published, history, link, hasPages, generatedProjectLink }) => {

	const projectCardClasses = useCreateClassName('project-card', parentClass, modClass)

	const { projectsList } = useTypedSelector(state => state.projects)
	const { setActiveProject, createPageAfterOpenProject, generateWebsite, getAllProjects } = useActions()


	const openProject = () => {
		setActiveProject(projectsList, link)
		history.push('/projects/' + link)
	}

	const createNewPage = () => {
		createPageAfterOpenProject(true)
		openProject()
	}

	return (
		<div className={projectCardClasses}>
			<div className="project-card__card-container">
				<div className="project-card__title">{title}</div>
				<div className="project-card__label-container">
					{published
						? <StatusLabel parentClass="project-card" modClass={["success"]}>Опубликован</StatusLabel>
						: <StatusLabel parentClass="project-card" modClass={["danger"]}>Не опубликован</StatusLabel>
					}
				</div>

				<div className="project-card__buttons-container">
					<Button parentClass="project-card" handler={openProject} >
						Редактировать сайт
					</Button>
					{!hasPages
						? <SecondaryButton parentClass="project-card" handler={createNewPage} >
							Создать страницу
						</SecondaryButton>
						: null
					}
					{hasPages && published
						? <CopyLink parentClass="project-card" value={generatedProjectLink} />
						: null
					}
					{hasPages && !published
						? <SecondaryButton parentClass="project-card" handler={async () => {
							await generateWebsite()
							getAllProjects()
						}} >
							Опубликовать сайт
						</SecondaryButton>
						: null
					}
				</div>
			</div>
		</div>
	)
}

export default withRouter(ProjectCard)