import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './LeftBar.scss'

interface ILeftBar {
	parentClass?: string
	modClass?: string[]
	isOpen: boolean
}

const LeftBar: React.FC<ILeftBar> = ({ parentClass, modClass, isOpen, children }) => {

	const classes = useCreateClassName('left-bar', parentClass, modClass)

	return (
		<CSSTransition
			in={isOpen}
			timeout={400}
			classNames="left-bar_show"
			mountOnEnter
			unmountOnExit
		>
			<div className={classes}>
				{children}
			</div>
		</CSSTransition >
	)

}

export default LeftBar