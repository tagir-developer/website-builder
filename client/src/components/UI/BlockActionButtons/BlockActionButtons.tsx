import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import './BlockActionButtons.scss'

interface IItems {
	title: string
	iconType: string
	handler: (param?: any) => any
}

interface IBlockActionButtons {
	parentClass?: string
	modClass?: string[]
	items?: Array<IItems>
}

const BlockActionButtons: React.FC<IBlockActionButtons> = ({ parentClass, modClass, items }) => {

	const [isOpen, isOpenHandler] = useState<boolean>(false)

	const BlockActionButtonsClasses = useCreateClassName('block-action-buttons', parentClass, modClass)

	const showMenuRef = useRef() as MutableRefObject<HTMLDivElement>

	useEffect(() => {

		const closeMenuWhenClickOutside = (event: MouseEvent): void => {
			if (event.target !== showMenuRef.current) isOpenHandler(false)
		}

		document.addEventListener('click', closeMenuWhenClickOutside)

		return () => {
			document.removeEventListener('click', closeMenuWhenClickOutside)
		}

	}, [])

	const openSettingInPopup = (e: React.MouseEvent<HTMLLIElement>, itemHandler: (param?: any) => any): void => {
		e.preventDefault()
		e.stopPropagation()
		isOpenHandler(false)
		itemHandler()
	}

	return (
		<div className={BlockActionButtonsClasses}>

			<div className="block-action-buttons__visible-only-on-pc">
				{items && items.map((i, index) => {
					return (
						<div
							key={'pc-action-button' + index}
							className={'block-action-buttons__pc-action-button block-action-buttons__pc-action-button_' + i.iconType}
							onClick={i.handler}
						>
							<span className="block-action-buttons__pc-tooltip">{i.title}</span>
						</div>
					)
				})}
			</div>

			<div
				className="block-action-buttons__visible-only-on-mobile"
				onClick={() => isOpenHandler(prev => !prev)}
				
			>
				<div className="block-action-buttons__menu">
					<CSSTransition
						in={isOpen}
						timeout={400}
						classNames="block-action-buttons__menu-list_show"
						mountOnEnter
						unmountOnExit
					>
						<ul className="block-action-buttons__menu-list" >

						{items && items.map((i, index) => {
							return (
								<li 
									key={'menu-list-item' + index}
									className={'block-action-buttons__menu-list-item block-action-buttons__menu-list-item_' + i.iconType }
									onClick={e => openSettingInPopup(e, i.handler)}
								>
									{i.title}
								</li>
							)
						})}

						</ul>
					</CSSTransition>
				</div>
				<div className="block-action-buttons__icon" ref={showMenuRef}></div>
			</div>

		</div>
	)
}

export default BlockActionButtons