import React from 'react'
import './WebsitePage.scss'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import ProjectHeader from '../../components/UI/ProjectHeader/ProjectHeader'
import AddNewButton from '../../components/UI/AddNewButton/AddNewButton'
import PageCard from '../../components/UI/PageCard/PageCard'
import PopUp from '../../components/HOC/PopUp/PopUp'
import { usePopup } from '../../hooks/usePopup.hook'
import LeftMenu from '../../components/Navigation/leftMenu/LeftMenu'
import Backdrop from '../../components/HOC/Backdrop/Backdrop'
import { useChooseBackdropProps } from '../../hooks/useChooseBackdropProps.hook'
import CreatePage from '../../components/UI/CreatePage/CreatePage'
import BasicSettings from '../../components/UI/BasicSettings/BasicSettings'
import FontConfig from '../../components/UI/FontConfig/FontConfig'

interface IRouteProps {
	name: string
}

interface IWebsitePage extends RouteComponentProps<IRouteProps> {
}

const WebsitePage: React.FC<IWebsitePage> = ({ match }) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	const pages = [
		{
			title: "Главная страница",
			published: true,
			link: '/page-1',
			isMainPage: true
		},
		{
			title: "Дополнительная страница",
			published: false,
			link: '/page-2',
			isMainPage: false
		}
	]

	const mainConfigPopup = usePopup(false, 'solid')
	const formProcessingPopup = usePopup(false, 'solid')
	const fontConfigPopup = usePopup(false, 'solid')

	const createPagePopup = usePopup(false, 'solid')

	const backdropProps = useChooseBackdropProps(mainConfigPopup, formProcessingPopup, fontConfigPopup, createPagePopup)

	const handlers = {
		mainConfigPopup: mainConfigPopup.handler,
		formProcessingPopup: formProcessingPopup.handler,
		fontConfigPopup: fontConfigPopup.handler,
	}

	return (
		<>
			<PopUp {...mainConfigPopup.popupProps} withTitle="Основные настройки">
				<BasicSettings parentClass="popup" handler={() => {}} />
			</PopUp>

			<PopUp {...formProcessingPopup.popupProps}>
				<LeftMenu parentClass="popup" title="Обработка форм" />
			</PopUp>

			<PopUp {...fontConfigPopup.popupProps} withTitle="Выбрать шрифт">
				<FontConfig parentClass="popup" handler={() => {}} />
			</PopUp>

			<PopUp {...createPagePopup.popupProps} withTitle="Создание страницы" >
				<CreatePage parentClass="popup" handler={() => {}} />
			</PopUp>

			<Backdrop {...backdropProps} >

			<TopMenu menuType="auth-project" />
			<div className="content-area">

				<div className="website-page">
					<ProjectHeader 
						parentClass="website-page" 
						name="Название сайта" 
						handlers={handlers}
						type='published-updated'
						// published={true}
						// hasPages={true}
						// updated={true}
					/>

					<div className="website-page__pages-list-container">

						{pages.map((i, index) => {
							return (
								<PageCard
									key={'page-card' + index}
									parentClass="website-page"
									title={i.title}
									published={i.published}
									link={'/' + match.params.name + i.link}
									isMainPage={i.isMainPage}
								/>
							)
						})}


					</div>

					<AddNewButton
						parentClass="website-page"
						handler={createPagePopup.handler}
						title="Добавить новую страницу"
					/>

				</div>

				{/* <h1>Страница отдельного проекта</h1>
				<h2>{match.params.name}</h2>
				<Link to={'/' + match.params.name + '/page-1'} >Страница 1</Link>
				<div></div>
				<Link to={'/' + match.params.name + '/page-2'} >Страница 2</Link>
				<div></div>
				<Link to={'/' + match.params.name + '/template'} >Создать новую страницу</Link> */}

			</div>
			<Footer />
			</Backdrop>
		</>
	)
}

export default withRouter(WebsitePage)