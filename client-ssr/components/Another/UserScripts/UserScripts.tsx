import React from 'react'
import { useUserScripts } from '../../../hooks/useUserScript.hook'

interface IUserScripts {
	scripts: string
}

const UserScripts: React.FC<IUserScripts> = ({scripts}) => {

	const scriptTypes = useUserScripts(scripts)

	return (
		<div>
		</div>
	)
}

export default UserScripts