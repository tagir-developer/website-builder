import React from 'react'
import './SmallIconButton.scss'

interface ISmallIconButton {
	img: string
	parentClass: string
}

const SmallIconButton: React.FC<ISmallIconButton> = ({children, img, parentClass}) => {
	return (
		<button className="small-icon-button">
			{children}
		</button>
	)
}

export default SmallIconButton