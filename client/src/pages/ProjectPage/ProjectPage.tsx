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
import { useTypedSelector } from '../../hooks/reduxHooks'
import { IUrlParams } from '../../models/IUrlParams'

interface IRouteProps {
	name: string
}

interface IProjectPage extends RouteComponentProps<IRouteProps> {
}

const ProjectPage: React.FC<IProjectPage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	const pages = [
		{
			pageId: 'page-1',
			title: "Главная страница",
			published: true,
			isMainPage: true
		},
		{
			pageId: 'page-2',
			title: "Дополнительная страница",
			published: false,
			isMainPage: false
		}
	]

	const mainConfigPopup = usePopup(false, 'solid')
	const formProcessingPopup = usePopup(false, 'solid')
	const fontConfigPopup = usePopup(false, 'solid')
	const createPagePopup = usePopup(false, 'solid')
	const backdropProps = useChooseBackdropProps(mainConfigPopup, formProcessingPopup, fontConfigPopup, createPagePopup)

	const { projectsNames } = useTypedSelector(state => state.projects)
	const history = useHistory()
	const { name } = useParams<IUrlParams>()

	useEffect(() => {
		if (!projectsNames.includes('/' + name)) history.push('/')
		// eslint-disable-next-line
	}, [])

	const handlers = {
		mainConfigPopup: mainConfigPopup.handler,
		formProcessingPopup: formProcessingPopup.handler,
		fontConfigPopup: fontConfigPopup.handler,
	}

	return (
		<>
			<PopUp {...mainConfigPopup.popupProps} withTitle="Основные настройки">
				<BasicSettings handler={() => { }} />
			</PopUp>

			<PopUp {...formProcessingPopup.popupProps} withTitle="Обработка форм">
				<FormProcessing handler={() => { }} />
			</PopUp>

			<PopUp {...fontConfigPopup.popupProps} withTitle="Выбрать шрифт">
				<FontConfig handler={() => { }} />
			</PopUp>

			<PopUp {...createPagePopup.popupProps} withTitle="Создание страницы" >
				<CreatePage handler={() => { }} />
			</PopUp>

			<Backdrop {...backdropProps} >
				{/* <Backdrop {...createPagePopup.backdropProps} > */}

				<TopMenu menuType="auth-project" />


				<div className="content-area">

					<div className="project-page">
						<ProjectHeader
							parentClass="project-page"
							name="Название сайта"
							handlers={handlers}
							type='published-updated'
						// published={true}
						// hasPages={true}
						// updated={true}
						/>

						<div className="project-page__pages-list-container">

							{pages.map((i, index) => {
								return (
									<PageCard
										key={'page-card' + index}
										parentClass="project-page"
										title={i.title}
										published={i.published}
										link={'/' + match.params.name + '/' + i.pageId}
										isMainPage={i.isMainPage}
									/>
								)
							})}


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
		</>
	)
}

export default withRouter(ProjectPage)