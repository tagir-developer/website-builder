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
import AlertMessage from '../../components/HOC/AlertMessage/AlertMessage'
import Loader from '../../components/UI/Loader/Loader'
import ChangeProject from '../../components/UI/ChangeProject/ChangeProject'
import Confirm from '../../components/UI/Confirm/Confirm'
import ChangePage from '../../components/UI/ChangePage/ChangePage'

interface IRouteProps {
	name: string
}

interface IProjectPage extends RouteComponentProps<IRouteProps> {
}

const ProjectPage: React.FC<IProjectPage> = ({ match }) => {

	const { projectsNames, activeProject, shouldCreatePageAfterOpenProject } = useTypedSelector(state => state.projects)
	const { pages: projectPages, loading, activePage } = useTypedSelector(state => state.page)
	const { getProjectPages, deleteProject, createPageAfterOpenProject, deletePage, makePageHome, copyPage } = useActions()

	const mainConfigPopup = usePopup(false, 'solid')
	const formProcessingPopup = usePopup(false, 'solid')
	const fontConfigPopup = usePopup(false, 'solid')
	const createPagePopup = usePopup(shouldCreatePageAfterOpenProject, 'solid')
	const changeProjectPopup = usePopup(false, 'solid')
	const changePagePopup = usePopup(false, 'blur')
	const deleteConfirmationPopup = usePopup(false, 'blur')
	const deletePageConfirmationPopup = usePopup(false, 'blur')
	const backdropProps = useChooseBackdropProps(changePagePopup, mainConfigPopup, formProcessingPopup, fontConfigPopup, createPagePopup, changeProjectPopup, deleteConfirmationPopup, deletePageConfirmationPopup)

	const history = useHistory()
	const { name: projectUrl } = useParams<IUrlParams>()

	const projectDeletion = () => {
		deleteProject(activeProject.id)
		history.push('/')
	}

	const pageDeletion = () => {
		deletePage(activePage?.id, activeProject.id)
	}

	useEffect(() => {
		if (!projectsNames.includes('/' + projectUrl)) history.push('/')
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		console.log('1111', activeProject.id)
		getProjectPages(activeProject.id)
		// eslint-disable-next-line
	}, [])


	useEffect(() => {
		if (!createPagePopup.isOpen) {
			createPageAfterOpenProject(false)
		}
		// eslint-disable-next-line
	}, [createPagePopup.isOpen])


	const projectHeaderHandlers = {
		mainConfigPopup: mainConfigPopup.handler,
		formProcessingPopup: formProcessingPopup.handler,
		fontConfigPopup: fontConfigPopup.handler,
		changeProjectPopup: changeProjectPopup.handler,
		deleteConfirmationPopup: deleteConfirmationPopup.handler
	}

	const pageHandlers = {
		changePageOpenPopup: changePagePopup.openPopup,
		copyPage,
		makePageHome,
		deletePageOpenPopup: deletePageConfirmationPopup.openPopup,
	}

	return (
		<>
			<AlertMessage>

				<PopUp {...createPagePopup.popupProps} withTitle="Создание страницы" >
					<CreatePage
						projectId={activeProject.id}
						closePopup={createPagePopup.closePopup}
					/>
				</PopUp>

				<PopUp {...changePagePopup.popupProps} withTitle="Изменить страницу" >
					<ChangePage
						pageId={activePage?.id}
						closePopup={changePagePopup.closePopup}
					/>
				</PopUp>

				<PopUp {...changeProjectPopup.popupProps} withTitle="Изменить сайт">
					<ChangeProject
						projectId={activeProject.id}
						closePopup={changeProjectPopup.closePopup}
					/>
				</PopUp>

				<PopUp {...deleteConfirmationPopup.popupProps} transparent={true}>
					<Confirm 
						handler={deleteConfirmationPopup.confirm}
						successFunc={projectDeletion}
					>
						Вы действительно хотите удалить сайт?
					</Confirm>
				</PopUp>

				<PopUp {...deletePageConfirmationPopup.popupProps} transparent={true}>
					<Confirm 
						handler={deletePageConfirmationPopup.confirm}
						successFunc={pageDeletion}
					>
						Вы действительно хотите удалить страницу?
					</Confirm>
				</PopUp>

				<PopUp {...mainConfigPopup.popupProps} withTitle="Основные настройки">
					<BasicSettings 
						handler={() => {}}
						closePopup={mainConfigPopup.closePopup}
						projectId={activeProject.id}
					/>
				</PopUp>

				<PopUp {...formProcessingPopup.popupProps} withTitle="Обработка форм">
					<FormProcessing 
						handler={() => { }}
						closePopup={formProcessingPopup.closePopup}
					/>
				</PopUp>

				<PopUp {...fontConfigPopup.popupProps} withTitle="Выбрать шрифт">
					<FontConfig handler={() => { }} />
				</PopUp>


				<Backdrop {...backdropProps} >

					<TopMenu menuType="auth-project" />

					<div className="content-area">

						<div className="project-page">
							<ProjectHeader
								parentClass="project-page"
								name={activeProject.name}
								handlers={projectHeaderHandlers}
								published={activeProject.isPublished}
								hasPages={activeProject.hasPages}
								updated={activeProject.updated}
								addPageHandler={createPagePopup.handler}
							// ? type='published-updated'
							/>

							<div className="project-page__pages-list-container">

								{loading
									? <Loader parentClass="project-page" />
									: !!projectPages.length
										?
										projectPages.map((i, index) => {
											return (
												<PageCard
													key={i.id}
													pageId={i.id}
													parentClass="project-page"
													title={i.name}
													published={i.published}
													link={'/projects/' + projectUrl + '/' + i.link}
													isMainPage={i.isHomePage}
													handlers={pageHandlers}
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