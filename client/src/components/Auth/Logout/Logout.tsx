import React from 'react'
import { useEffect } from 'react'
import { useActions } from '../../../hooks/reduxHooks'

const Logout: React.FC = () => {

	const {logout} = useActions()

	useEffect(() => {
		logout()
	}, [])

	return (<></>)
}

export default Logout