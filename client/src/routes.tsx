import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import EditPage from './pages/EditPage/EditPage'
import HelpPage from './pages/HelpPage/HelpPage'
import PageStart from './pages/HelpPage/pages/PageStart'
import LandingPage from './pages/LandingPage/LandingPage'
import LearningPage from './pages/LearningPage/LearningPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRecoveryPage'
import PreviewPage from './pages/PreviewPage/PreviewPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SelectTemplatePage from './pages/SelectTemplatePage/SelectTemplatePage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import WebsitePage from './pages/WebsitePage/WebsitePage'

export const useRoutes = (isAuthenticated: boolean): JSX.Element => {


	const helpPageRoutes = (): JSX.Element => (
		<>
			<Route path="/help/two">
				<HelpPage><PageStart title="Как создать сайт" /></HelpPage>
			</Route>
			<Route path="/help/three">
				<HelpPage><PageStart title="Как создать страницу сайта" /></HelpPage>
			</Route>
			<Route path="/help/four">
				<HelpPage><PageStart title="Как использовать готовые шаблоны" /></HelpPage>
			</Route>
			<Route path="/help/five">
				<HelpPage><PageStart title="Как изменить сайт" /></HelpPage>
			</Route>
			<Route path="/help/six">
				<HelpPage><PageStart title="Как привязать домен" /></HelpPage>
			</Route>
			<Route path="/help/seven">
				<HelpPage><PageStart title="Как подключить счетчики аналитики" /></HelpPage>
			</Route>
			<Route path="/help" exact >
				<HelpPage><PageStart title="Начало работы" /></HelpPage>
			</Route>
		</>
	)

	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/" component={ProjectsPage} exact />
				<Route path="/user-profile" component={UserProfilePage} exact />
				<Route path="/learning" component={LearningPage} exact />
				{helpPageRoutes()}
				{/* <Route path="/help" component={HelpPage} exact />			 */}
				<Route path="/:name" component={WebsitePage} exact />
				<Route path="/:name/template" component={SelectTemplatePage} exact />
				<Route path="/:name/:pageId" component={EditPage} exact />
				<Route path="/:name/:pageId/preview" component={PreviewPage} exact />
				<Redirect to="/" />
			</Switch>
		)
	}


	return (
		<Switch>
			<Route path="/" component={LandingPage} exact />
			<Route path="/login" component={AuthPage} exact />
			<Route path="/registration" component={RegisterPage} exact />
			<Route path="/recovery" component={PasswordRecoveryPage} exact />
			<Route path="/learning" component={LearningPage} exact />
			{helpPageRoutes()}
			{/* <Route path="/help" component={HelpPage} exact /> */}
			<Redirect to="/" />
		</Switch>
	)
}