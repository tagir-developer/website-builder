import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom'
import AuthPage from './pages/AuthPage/AuthPage'
import ComplaintPage from './pages/ComplaintPage/ComplaintPage'
import EditPage from './pages/EditPage/EditPage'
import HelpPage from './pages/HelpPage/HelpPage'
import PageStart from './pages/HelpPage/pages/PageStart'
import LandingPage from './pages/LandingPage/LandingPage'
import LearningPage from './pages/LearningPage/LearningPage'
import PasswordRecoveryPage from './pages/PasswordRecoveryPage/PasswordRecoveryPage'
import PreviewPage from './pages/PreviewPage/PreviewPage'
import ProjectsListPage from './pages/ProjectsListPage/ProjectsListPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import QuestionPage from './pages/QuestionPage/QuestionPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SelectTemplatePage from './pages/SelectTemplatePage/SelectTemplatePage'
import UserProfilePage from './pages/UserProfilePage/UserProfilePage'
import { useTypedSelector } from './hooks/reduxHooks'
import Logout from './components/Auth/Logout/Logout'
import PassResetPage from './pages/PassResetPage/PassResetPage'
import { useEffect } from 'react'

export const Routes: React.FC = (): JSX.Element => {

	const { isAuth } = useTypedSelector(state => state.auth) //! Пока убираем авторизацию, потом вернем

	const history = useHistory()
	const location = useLocation()

	useEffect(() => {
		if (isAuth) {
			const path = localStorage.getItem('path')
			history.push(path ? path : '/')
		}
		// eslint-disable-next-line
	}, [isAuth])

	useEffect(() => {
		return () => {
			localStorage.setItem('path', location.pathname)
		}
		// eslint-disable-next-line
	}, [])

	if (isAuth) {
		return (
			<Switch>
				<Route path="/" component={ProjectsListPage} exact />
				<Route path="/learning" component={LearningPage} exact />
				<Route path="/question" component={QuestionPage} exact />
				<Route path="/complaint" component={ComplaintPage} exact />
				<Route path="/user-profile" component={UserProfilePage} exact />
				<Route path="/logout" component={Logout} exact />

				<Route path="/help/two" exact >
					<HelpPage><PageStart title="Как создать сайт" /></HelpPage>
				</Route>
				<Route path="/help/three" exact >
					<HelpPage><PageStart title="Как создать страницу сайта" /></HelpPage>
				</Route>
				<Route path="/help/four" exact >
					<HelpPage><PageStart title="Как использовать готовые шаблоны" /></HelpPage>
				</Route>
				<Route path="/help/five" exact >
					<HelpPage><PageStart title="Как изменить сайт" /></HelpPage>
				</Route>
				<Route path="/help/six" exact >
					<HelpPage><PageStart title="Как привязать домен" /></HelpPage>
				</Route>
				<Route path="/help/seven" exact >
					<HelpPage><PageStart title="Как подключить счетчики аналитики" /></HelpPage>
				</Route>
				<Route path="/help" exact >
					<HelpPage><PageStart title="Начало работы" /></HelpPage>
				</Route>

				<Route path="/projects/:name" component={ProjectPage} exact />
				<Route path="/projects/:name/:pageId" component={EditPage} exact />
				<Route path="/projects/:name/:pageId/template" component={SelectTemplatePage} exact />
				<Route path="/projects/:name/:pageId/preview" component={PreviewPage} exact />
				<Redirect to="/" />
			</Switch>
		)
	}


	return (
		<Switch>
			<Route path="/" component={LandingPage} exact />
			<Route path="/login" component={AuthPage} exact />
			<Route path="/registration" component={RegisterPage} exact />
			<Route path="/password/:token" component={PasswordRecoveryPage} exact />
			<Route path="/reset" component={PassResetPage} exact />
			<Route path="/learning" component={LearningPage} exact />
			<Route path="/question" component={QuestionPage} exact />
			<Route path="/complaint" component={ComplaintPage} exact />

			<Route path="/help/two" exact >
				<HelpPage><PageStart title="Как создать сайт" /></HelpPage>
			</Route>
			<Route path="/help/three" exact >
				<HelpPage><PageStart title="Как создать страницу сайта" /></HelpPage>
			</Route>
			<Route path="/help/four" exact >
				<HelpPage><PageStart title="Как использовать готовые шаблоны" /></HelpPage>
			</Route>
			<Route path="/help/five" exact >
				<HelpPage><PageStart title="Как изменить сайт" /></HelpPage>
			</Route>
			<Route path="/help/six" exact >
				<HelpPage><PageStart title="Как привязать домен" /></HelpPage>
			</Route>
			<Route path="/help/seven" exact >
				<HelpPage><PageStart title="Как подключить счетчики аналитики" /></HelpPage>
			</Route>
			<Route path="/help" exact >
				<HelpPage><PageStart title="Начало работы" /></HelpPage>
			</Route>

			<Redirect to="/" />
		</Switch>
	)
}