import React from 'react'
import './EditBlockWrapper.scss'
import { useCreateClassName } from '../../../hooks/createClassName.hook'
import BlockActionButtons from '../../UI/BlockActionButtons/BlockActionButtons'
import BlockMoveBtn from '../../UI/BlockMoveBtn/BlockMoveBtn'
import { useState } from 'react'
import { useActions, useTypedSelector } from '../../../hooks/reduxHooks'

interface IEditBlockWrapper {
	parentClass?: string
	modClass?: string[]
	openConfig: () => void
	openContent: () => void
	blockId: string
}

const EditBlockWrapper: React.FC<IEditBlockWrapper> = ({ children, parentClass, modClass, openConfig, openContent, blockId }) => {

	const blockWrapperClasses = useCreateClassName("edit-block-wrapper", parentClass, modClass)

	const [hovered, setHovered] = useState<boolean>(false)

	const {pageBlocks} = useTypedSelector(state => state.block)
	const {activePage} = useTypedSelector(state => state.page)
	const {setActiveBlock, deleteBlock, saveBlocksInDB, copyBlock} = useActions()

	const mouseOverHandler = () => {
		setHovered(true)
	}

	const mouseLeaveHandler = () => {
		setHovered(false)
	}

	const isHide = false

	const items = [
		{
			title: 'Настройки',
			iconType: 'config',
			handler: () => {
				setActiveBlock(pageBlocks, blockId)
				openConfig()
			}
		},
		{
			title: 'Редактировать',
			iconType: 'edit',
			handler: () => {
				setActiveBlock(pageBlocks, blockId)
				openContent()
			}
		},
		{
			title: 'Дублировать',
			iconType: 'copy',
			handler: async () => {
				await setActiveBlock(pageBlocks, blockId)
				copyBlock()
			}
		},
		{
			title: 'Удалить',
			iconType: 'delete',
			handler: async () => {
				await deleteBlock(blockId)
				if (activePage.autosavePage) saveBlocksInDB()
			}
		},
		{
			title: isHide ? 'Показать' : 'Скрыть',
			iconType: isHide ? 'show' : 'hide',
			handler: () => { }
		},
	]

	return (
		<div
			className={blockWrapperClasses}
			onMouseOver={mouseOverHandler}
			onMouseLeave={mouseLeaveHandler}
		>
			{hovered && <>
				<div className="edit-block-wrapper__green-light"></div>
				<BlockActionButtons 
					parentClass="edit-block-wrapper" 
					items={items}
				/>
				<BlockMoveBtn parentClass="edit-block-wrapper" handler={() => { }} />
			</>}

			{children}
		</div>
	)
}

export default EditBlockWrapper