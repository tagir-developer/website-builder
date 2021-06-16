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


	// const stopPropagation = (event: React.MouseEvent<HTMLDivElement>): void => {
	// 	event.preventDefault()
	// 	event.stopPropagation()
	// }

	return (
		<CSSTransition
			in={isOpen}
			timeout={400}
			classNames="left-bar_show"
			mountOnEnter
			unmountOnExit
		>
			<div className={classes}>
				{/* <div className="left-bar__content"> */}
					{children}
				{/* </div> */}
			</div>
		</CSSTransition >
	)

}

export default LeftBar