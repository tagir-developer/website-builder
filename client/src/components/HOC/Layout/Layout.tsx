import React, { useEffect } from 'react'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import Loader from '../../UI/Loader/Loader'

const Layout: React.FC = ({ children }) => {

	const { checkAuthLoading } = useTypedSelector(state => state.auth)

	const { checkAuth } = useActions()
	
	useEffect(() => {
		if (localStorage.getItem('token')) {
			checkAuth()
		}
		// eslint-disable-next-line
	}, [])

	return (
		<main className="main">
			{checkAuthLoading
				? <div className="center-align-full-screen">
					<Loader />
				</div>
				: children
			}
		</main>
	)
}

export default Layout