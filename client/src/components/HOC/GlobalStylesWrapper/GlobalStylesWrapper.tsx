import React, { MutableRefObject, useRef } from 'react'
import { useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/reduxHooks'
import './GlobalStylesWrapper.scss'

const GlobalStylesWrapper: React.FC = ({ children }) => {

	const {activeProject} = useTypedSelector(state => state.projects)
	const divRef = useRef() as MutableRefObject<HTMLDivElement>

	useEffect(() => {
		divRef.current.style.setProperty('--titleSize', activeProject.fontConfigs.title.fontSize)
		divRef.current.style.setProperty('--titleWeight', activeProject.fontConfigs.title.fontWeight)
		// eslint-disable-next-line
	}, [])

	return (
		<div 
			className="styled-components-global-styles" 
			style={{
				fontFamily: activeProject.fontConfigs.fontFamily,
				fontSize: activeProject.fontConfigs.text.fontSize
			}}
			ref={divRef}
		>
			{children}
		</div>
	)
}

export default GlobalStylesWrapper