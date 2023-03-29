import React from 'react'
import Script from 'next/script'
import { useUserScripts } from '../../../hooks/useUserScript.hook'

interface IUserScripts {
	scripts: string
}

const UserScripts: React.FC<IUserScripts> = ({ scripts }) => {

	const scriptTypes = useUserScripts(scripts)

	return (
		<>
			{scriptTypes.asyncSourceScripts
				? scriptTypes.asyncSourceScripts.map((i, index) => (
					<Script 
						key={index}
						id={"async-" + index}
						async
						src={i}
					/>
				))
				: null
			}
			{scriptTypes.simpleSourceScripts
				? scriptTypes.simpleSourceScripts.map((i, index) => (
					<Script 
						key={index}
						id={"simple-" + index}
						src={i} 
					/>
				))
				: null
			}
			{scriptTypes.inlineScripts
				? <Script
					id="user-custom-scripts"
					dangerouslySetInnerHTML={{
						__html: scriptTypes.inlineScripts
					}}
				/>
				: null
			}
		</>
	)
}

export default UserScripts