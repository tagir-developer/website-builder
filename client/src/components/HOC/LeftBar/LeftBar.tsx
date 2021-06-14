import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './LeftBar.scss'

interface ILeftBar {
	parentClass?: string
	type: 'blur' | 'solid'
	modClass?: string[]
	isOpen: boolean
	handler: () => void
	transparent?: boolean
	withTitle?: string
	backdropBlocked?: boolean
}

const LeftBar: React.FC<ILeftBar> = ({ parentClass, modClass, type, isOpen, children, handler, transparent, withTitle, backdropBlocked }) => {


	const classes = useCreateClassName('LeftBar', parentClass, modClasses)


	const stopPropagation = (event: React.MouseEvent<HTMLDivElement>): void => {
		event.preventDefault()
		event.stopPropagation()
	}

	return (
		<div className={classes}>
			<CSSTransition
				in={isOpen}
				timeout={400}
				classNames="left-bar_show"
				mountOnEnter
				unmountOnExit
			>
				<div className="left-bar__content">
					{children}
				</div>
			</CSSTransition>
		</div>

	)

}

export default LeftBar