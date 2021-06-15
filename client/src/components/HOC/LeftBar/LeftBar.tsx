import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './LeftBar.scss'

interface ILeftBar {
	parentClass?: string
	modClass?: string[]
	isOpen: boolean
	transparent?: boolean
	withTitle?: string
	backdropBlocked?: boolean
}

const LeftBar: React.FC<ILeftBar> = ({ parentClass, modClass, isOpen, children, transparent, withTitle, backdropBlocked }) => {


	const classes = useCreateClassName('left-bar', parentClass)


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