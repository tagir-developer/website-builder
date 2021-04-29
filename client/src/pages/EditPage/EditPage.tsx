import React from 'react'
import TopMenu from '../../components/Navigation/topMenu/TopMenu/TopMenu'
import Footer from '../../components/UI/Footer/Footer'
import {RouteComponentProps, withRouter, Link} from 'react-router-dom'

interface IRouteProps {
	pageId: string
	name: string
}

interface IEditPage extends RouteComponentProps<IRouteProps> {

}

const EditPage: React.FC<IEditPage> = ({match}) => {

	// *Здесь нужна проверка, есть ли такой роут в базе проектов, если нет, то выводим сообщение об ошибке или редиректим на главную

	return (
		<>
			<TopMenu menuType="edit" />
			<div className="content-area">
				<h1>Редактор страницы</h1>
				<h2>{match.params.pageId}</h2>
				<Link to={'/' + match.params.name + '/' + match.params.pageId + '/preview'} >Предпросмотр</Link>
			</div>
			<Footer />
		</>
	)
}

export default withRouter(EditPage)