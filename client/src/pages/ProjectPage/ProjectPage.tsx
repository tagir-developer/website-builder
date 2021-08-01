import React, { useEffect } from 'react'
import './ProjectPage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { RouteComponentProps, useHistory, useParams, withRouter } from 'react-router-dom'
import ProjectHeader from '../../components/UI/ProjectHeader/ProjectHeader'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import PageCard from '../../components/UI/PageCard/PageCard'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { usePopup } from '../../hooks/usePopup.hook'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import CreatePage from '../../components/UI/CreatePage/CreatePage'
import BasicSettings from '../../components/UI/BasicSettings/BasicSettings'
import FontConfig from '../../components/UI/FontConfig/FontConfig'
import FormProcessing from '../../components/UI/FormProcessing/FormProcessing'
import { useActions, useTypedSelector } from '../../hooks/reduxHooks'
import { IUrlParams } from '../../models/IUrlParams'
import { IProjectsResponse } from '../../models/response/ProjectsResponse'
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'
import Loader from '../../components/UI/Loader/Loader'
import ChangeProject from '../../components/UI/ChangeProject/ChangeProject'
import Confirm from '../../components/UI/Confirm/Confirm'

interface IRouteProps {
	name: string
}

interface IProjectPage extends RouteComponentProps<IRouteProps> {
}

const ProjectPage: React.FC<IProjectPage> = ({ match }) => {

	const mainConfigPopup = usePopup(false, 'solid')
	const formProcessingPopup = usePopup(false, 'solid')
	const fontConfigPopup = usePopup(false, 'solid')
	const createPagePopup = usePopup(false, 'solid')
	const changeProjectPopup = usePopup(false, 'solid')
	const deleteConfirmationPopup = usePopup(false, 'blur')
	const backdropProps = useChooseBackdropProps(mainConfigPopup, formProcessingPopup, fontConfigPopup, createPagePopup, changeProjectPopup, deleteConfirmationPopup)

	const { projectsNames, projectsList } = useTypedSelector(state => state.projects)
	const { pages: projectPages, loading } = useTypedSelector(state => state.page)
	const { getProjectPages } = useActions()

	const history = useHistory()
	const { name: projectUrl } = useParams<IUrlParams>()
	const projectData: IProjectsResponse = projectsList.filter(i => i.link === projectUrl)[0]

	const projectId = projectsList.filter(i => i.link === projectUrl)[0].id

	useEffect(() => {
		if (!projectsNames.includes('/' + projectUrl)) history.push('/')
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		getProjectPages(projectId)
		// eslint-disable-next-line
	}, [])

	const handlers = {
		mainConfigPopup: mainConfigPopup.handler,
		formProcessingPopup: formProcessingPopup.handler,
		fontConfigPopup: fontConfigPopup.handler,
		changeProjectPopup: changeProjectPopup.handler,
		deleteConfirmationPopup: deleteConfirmationPopup.handler
	}

	const successfulPageCreation = () => {
		createPagePopup.closePopup()
		getProjectPages(projectId)
	}

	return (
		<>
			<AlertMessage successFunc={successfulPageCreation}>

				<PopUp {...createPagePopup.popupProps} withTitle="Создание страницы" >
					<CreatePage
						// handler={() => { }} 
						projectId={projectId}
						closePopup={createPagePopup.closePopup}
					/>
				</PopUp>

				<PopUp {...changeProjectPopup.popupProps} withTitle="Изменить сайт">
					<ChangeProject />
				</PopUp>

				<PopUp {...deleteConfirmationPopup.popupProps} transparent={true}>
					<Confirm handler={deleteConfirmationPopup.confirm}>Вы действительно хотите удалить сайт?</Confirm>
				</PopUp>

				<PopUp {...mainConfigPopup.popupProps} withTitle="Основные настройки">
					<BasicSettings handler={() => { }} />
				</PopUp>

				<PopUp {...formProcessingPopup.popupProps} withTitle="Обработка форм">
					<FormProcessing handler={() => { }} />
				</PopUp>

				<PopUp {...fontConfigPopup.popupProps} withTitle="Выбрать шрифт">
					<FontConfig handler={() => { }} />
				</PopUp>


				<Backdrop {...backdropProps} >
					{/* <Backdrop {...createPagePopup.backdropProps} > */}

					<TopMenu menuType="auth-project" />


					<div className="content-area">

						<div className="project-page">
							<ProjectHeader
								parentClass="project-page"
								name={projectData.name}
								handlers={handlers}
								published={projectData.isPublished}
								hasPages={projectData.hasPages}
								updated={projectData.updated}
								addPageHandler={createPagePopup.handler}
							// ? type='published-updated'
							/>

							<div className="project-page__pages-list-container">

								{loading
									? <Loader parentClass="project-page" />
									: !!projectsList.length
										?
										projectPages.map((i, index) => {
											return (
												<PageCard
													key={i.id}
													parentClass="project-page"
													title={i.name}
													published={i.published}
													link={'/projects/' + projectUrl + '/' + i.link}
													isMainPage={i.isHomePage}
												/>
											)
										})
										: null
								}

							</div>

							<AddNewButton
								parentClass="project-page"
								handler={createPagePopup.handler}
								title="Добавить новую страницу"
							/>

						</div>
					</div>
					<Footer />
				</Backdrop>
			</AlertMessage>
		</>
	)
}

export default withRouter(ProjectPage)