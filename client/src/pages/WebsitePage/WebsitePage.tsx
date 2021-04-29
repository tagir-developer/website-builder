import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import {RouteComponentProps, withRouter, Link} from 'react-router-dom'

interface IRouteProps {
	name: string
}

interface IWebsitePage extends RouteComponentProps<IRouteProps> {

}

const WebsitePage: React.FC<IWebsitePage> = ({match}) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	return (
		<>
			<TopMenu menuType="auth-project" />
			<div className="content-area">
				<h1>Страница отдельного проекта</h1>
				<h2>{match.params.name}</h2>
				<Link to={'/' + match.params.name + '/page-1'} >Страница 1</Link>
				<div></div>
				<Link to={'/' + match.params.name + '/page-2'} >Страница 2</Link>
				<div></div>
				<Link to={'/' + match.params.name + '/template'} >Создать новую страницу</Link>
			</div>
			<Footer />
		</>
	)
}

export default withRouter(WebsitePage)