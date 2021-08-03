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
import { useCallback } from 'react'
import ChangePage from '../../components/UI/ChangePage/ChangePage'

interface IRouteProps {
	name: string
}

interface IProjectPage extends RouteComponentProps<IRouteProps> {
}

const ProjectPage: React.FC<IProjectPage> = ({ match }) => {

	const { projectsNames, projectsList, activeProject, shouldCreatePageAfterOpenProject } = useTypedSelector(state => state.projects)
	const { pages: projectPages, loading } = useTypedSelector(state => state.page)
	const { getProjectPages, deleteProject, createPageAfterOpenProject, deletePage, makePageHome, copyPage, changePage } = useActions()

	const projectDeletion = () => {
		deleteProject(activeProject.id)
		history.push('/')
	}

	const pageDeletion = (pageId: string) => {
		deletePage(pageId) // ! Наверно нужно создать в redux активную страницу, так как id страницы нужен много где
	}

	const mainConfigPopup = usePopup(false, 'solid')
	const formProcessingPopup = usePopup(false, 'solid')
	const fontConfigPopup = usePopup(false, 'solid')
	const createPagePopup = usePopup(shouldCreatePageAfterOpenProject, 'solid')
	const changeProjectPopup = usePopup(false, 'solid')
	const changePagePopup = usePopup(false, 'solid')
	// const deleteConfirmationPopup = usePopup(false, 'blur', () => deleteProject(activeProject.id))
	const deleteConfirmationPopup = usePopup(false, 'blur', projectDeletion)
	const deletePageConfirmationPopup = usePopup(false, 'blur', pageDeletion)
	const backdropProps = useChooseBackdropProps(mainConfigPopup, formProcessingPopup, fontConfigPopup, createPagePopup, changeProjectPopup, deleteConfirmationPopup)

	const history = useHistory()
	const { name: projectUrl } = useParams<IUrlParams>()

	useEffect(() => {
		if (!projectsNames.includes('/' + projectUrl)) history.push('/')
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
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
		changePage: changePagePopup.openPopup,
		copyPage,
		makePageHome,
		deletePage: deletePageConfirmationPopup.openPopup,
	}

	// let successFunction = () => {}

	// const successFunction = useCallback(() => {

	// 	console.log('Стартовало переопределение функции')

	// 	const successfulPageCreation = () => {
	// 		console.log('1 - функция создания страницы')
	// 		createPagePopup.closePopup()
	// 		getProjectPages(activeProject.id)
	// 	}

	// 	const succesfulProjectDeletion = () => {
	// 		console.log('2 - функция удаления страницы')
	// 		deleteProject(activeProject.id)
	// 		history.push('/')
	// 	}

	// 	if (createPagePopup.isOpen) {
	// 		console.log('Назначена функция создания страницы')
	// 		return successfulPageCreation()
	// 	}

	// 	if (deleteConfirmationPopup.confirm.isConfirm) {
	// 		// succesfulProjectDeletion()
	// 		console.log('Назначена функция удаления страницы')
	// 		return () => succesfulProjectDeletion()
	// 	}

	// 	console.log('Ни одно условие не сработало и функция пустая')
	// 	// successFunction =  () => {}

	// }, [createPagePopup.isOpen, deleteConfirmationPopup.confirm.isConfirm])

	// const successfulPageCreation = () => {
	// 	createPagePopup.closePopup()
	// 	getProjectPages(activeProject.id)
	// }

	return (
		<>
			{/* <AlertMessage successFunc={successfulPageCreation}> */}
			{/* <AlertMessage successFunc={successFunction}> */}
			{/* <AlertMessage> */}

				<PopUp {...createPagePopup.popupProps} withTitle="Создание страницы" >
					<CreatePage
						// handler={() => { }} 
						projectId={activeProject.id}
						closePopup={createPagePopup.closePopup}
					/>
				</PopUp>

				<PopUp {...changePagePopup.popupProps} withTitle="Изменить страницу" >
					<ChangePage
						pageId={activeProject.id} // ! Не знаю как передать сюда id страницы, для которой открыт попап
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
					<Confirm handler={deleteConfirmationPopup.confirm}>Вы действительно хотите удалить сайт?</Confirm>
				</PopUp>

				<PopUp {...deletePageConfirmationPopup.popupProps} transparent={true}>
					<Confirm handler={deletePageConfirmationPopup.confirm}>Вы действительно хотите удалить страницу?</Confirm>
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
			{/* </AlertMessage> */}
		</>
	)
}

export default withRouter(ProjectPage)