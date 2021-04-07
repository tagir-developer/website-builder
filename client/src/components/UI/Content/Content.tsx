import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Content.scss'
import img from '../../Navigation/topMenu/Logo/img/logo.svg'

const Content: React.FC = () => {
	return (
		<div className="content">
			<h2>Content component</h2>
			<Toggle name="test-toggle" />
			<img src={img} alt="img" />
		</div>
	)
}

export default Content