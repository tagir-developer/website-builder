import React, { useEffect, useState } from 'react'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'
import Loader from '../../UI/Loader/Loader'

const Layout: React.FC = ({ children }) => {

	const [loadingBeforeStartCheckAuth, setLoadingBeforeStartCheckAuth] = useState<boolean>(true)

	const { checkAuthLoading } = useTypedSelector(state => state.auth)
	const { checkAuth } = useActions()

	useEffect(() => {
		if (localStorage.getItem('token')) checkAuth()
		setLoadingBeforeStartCheckAuth(false)
		// eslint-disable-next-line
	}, [])

	return (
		<main className="main">
			{checkAuthLoading || loadingBeforeStartCheckAuth
				? <div className="center-align-full-screen">
					<Loader />
				</div>
				: children
			}
		</main>
	)
}

export default Layout