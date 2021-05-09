import React from 'react'
import './Backdrop.scss'

const Backdrop: React.FC = ({ children }) => {
	return (
		<>
			<div className="popup-backdrop">
				<div className="popup-backdrop__darkening"></div>
				{children}
			</div>
		</>
	)
}

export default Backdrop