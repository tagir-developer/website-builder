import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import LandingPage from './pages/LandingPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage'
import RegisterPage from './pages/RegisterPage'

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
			{/* <Route path="/" component={ProjectsPage} exact />
			<Route path="/:name" component={WebsitePage} />
			<Route path="/:name/template" component={SelectTemplatePage} />
			<Route path="/:name/:page-id" component={EditPage} />
			<Route path="/:name/:page-id/preview" component={PreviewPage} /> */}
			<Redirect to="/" />
		</Switch>
	)
}