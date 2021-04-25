import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import EditPage from './pages/EditPage/EditPage'
import LandingPage from './pages/LandingPage/LandingPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRecoveryPage'
import PreviewPage from './pages/PreviewPage/PreviewPage'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SelectTemplatePage from './pages/SelectTemplatePage/SelectTemplatePage'
import WebsitePage from './pages/WebsitePage/WebsitePage'

export const useRoutes = (isAuthenticated: boolean) => {
	if (!isAuthenticated) {
		return (
			<Switch>
				<Route path="/" component={LandingPage} exact />
				<Route path="/login" component={AuthPage} exact />
				<Route path="/registration" component={RegisterPage} exact />
				<Route path="/recovery" component={PasswordRecoveryPage} exact />
				<Redirect to="/" />
			</Switch>
		)
	}

	return (
		<Switch>
			<Route path="/" component={ProjectsPage} exact />
			<Route path="/:name" component={WebsitePage} />
			<Route path="/:name/template" component={SelectTemplatePage} />
			<Route path="/:name/:page-id" component={EditPage} />
			<Route path="/:name/:page-id/preview" component={PreviewPage} />
			<Redirect to="/" />
		</Switch>
	)
}