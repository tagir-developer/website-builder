import React, { useEffect } from 'react'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import Loader from '../../UI/Loader/Loader'

const Layout: React.FC = ({ children }) => {

	// !Когда будем подключать Redux, можно будет задавать тегу main класс с размытием, при открытии алерта

	const { loading } = useTypedSelector(state => state.auth)

	const { checkAuth } = useActions()

	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuth()
		}
	}, [])

	return (
		<main className="main">
			{loading
				? <div className="center-align-full-screen">
					<Loader />
				</div>
				: children
			}
		</main>
	)
}

export default Layout