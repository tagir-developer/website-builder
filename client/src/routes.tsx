import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import EditPage from './pages/EditPage/EditPage'
import HelpPage from './pages/HelpPage/HelpPage'
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
	if (isAuthenticated) {
		return (
			<Switch>
				<Route path="/" component={ProjectsPage} exact />
				<Route path="/user-profile" component={UserProfilePage} exact />
				<Route path="/learning" component={LearningPage} exact />
				<Route path="/help" component={HelpPage} exact />			
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
			<Route path="/project" component={LandingPage} exact />
			<Route path="/login" component={AuthPage} exact />
			<Route path="/registration" component={RegisterPage} exact />
			<Route path="/recovery" component={PasswordRecoveryPage} exact />
			<Route path="/learning" component={LearningPage} exact />
			<Route path="/help" component={HelpPage} exact />
			<Redirect to="/project" />
		</Switch>
	)
}