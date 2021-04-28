import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import {RouteComponentProps, withRouter} from 'react-router-dom'

interface IRouteProps {
	name: string
}

interface IWebsitePage extends RouteComponentProps<IRouteProps> {

}

const WebsitePage: React.FC<IWebsitePage> = ({match}) => {
	return (
		<>
			<TopMenu menuType="auth-project" />
			<div className="content-area">
				<h1>Страница отдельного проекта</h1>
				<p>{JSON.stringify(match.params)}</p>
				<p>{match.params.name}</p>
			</div>
			<Footer />
		</>
	)
}

export default withRouter(WebsitePage)