import React from 'react'
import { useEffect } from 'react'
import { useActions } from '../../../hooks/reduxHooks'

const Logout: React.FC = () => {

	const {logout} = useActions()

	useEffect(() => {
		localStorage.setItem('path', '/')
		logout()
		// eslint-disable-next-line
	}, [])

	return (<></>)
}

export default Logout