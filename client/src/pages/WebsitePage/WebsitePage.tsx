import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import {RouteComponentProps, withRouter} from 'react-router-dom'

const WebsitePage: React.FC<RouteComponentProps> = ({match}) => {
	return (
		<>
			<TopMenu menuType="auth-project" />
			<div className="content-area">
				<h1>Страница отдельного проекта - {match.params.name}</h1>
			</div>
			<Footer />
		</>
	)
}

export default withRouter(WebsitePage)