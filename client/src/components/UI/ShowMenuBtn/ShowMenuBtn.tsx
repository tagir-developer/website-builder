import classNames from 'classnames'
import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './ShowMenuBtn.scss'

interface IShowMenuBtn {
	parentClass?: string
	modClass?: string[]
	handler?: () => void
}

const ShowMenuBtn: React.FC<IShowMenuBtn> = ({ parentClass, modClass, handler }) => {

	const [isOpen, isOpenHandler] = useState<boolean>(false)

	const ShowMenuBtnClasses = useCreateClassName('show-menu-btn', parentClass, modClass)

	// const toggleClasses = classNames({
	// 	'show-menu-btn__icon': true,
	// })

	const toggleHandler = () => {
		isOpenHandler(prev => !prev)
		// if (handler) handler()
	}

	const liks = [
		{
			title: 'Снять с публикации',
			link: '/font-configure'
		},
		{
			title: 'Изменить страницу',
			link: '/font-configure'
		},
		{
			title: 'Создать дубликат',
			link: '/font-configure'
		},
		{
			title: 'Удалить страницу',
			link: '/font-configure'
		},
		{
			title: 'Сделать главной',
			link: '/font-configure'
		},
	]

	return (
		<>
			<div
				className={ShowMenuBtnClasses}
				onClick={toggleHandler}
			>
				<div className="show-menu-btn__menu">
					<CSSTransition
						in={isOpen}
						timeout={400}
						classNames="show-menu-btn__menu-list_show"
						mountOnEnter
						unmountOnExit
					>
						<ul className="show-menu-btn__menu-list">
							<li className="show-menu-btn__menu-list-item" >Сделать главной</li>
							<li className="show-menu-btn__menu-list-item" >Сделать главной</li>
							<li className="show-menu-btn__menu-list-item" >Сделать главной</li>
							<li className="show-menu-btn__menu-list-item" >Сделать главной</li>
						</ul>
					</CSSTransition>
				</div>

				<div className="show-menu-btn__icon"></div>
			</div>
		</>
	)
}

export default ShowMenuBtn