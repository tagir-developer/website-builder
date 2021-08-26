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
	blockIsHidden: boolean
}

const EditBlockWrapper: React.FC<IEditBlockWrapper> = ({ children, parentClass, modClass, openConfig, openContent, blockId, blockIsHidden }) => {

	const blockWrapperClasses = useCreateClassName("edit-block-wrapper", parentClass, modClass)

	const [hovered, setHovered] = useState<boolean>(false)

	const { pageBlocks } = useTypedSelector(state => state.block)
	const { activePage } = useTypedSelector(state => state.page)
	const { setActiveBlock, deleteBlock, saveBlocksInDB, copyBlock, showHideBlock, moveBlock } = useActions()

	const mouseOverHandler = () => {
		setHovered(true)
	}

	const mouseLeaveHandler = () => {
		setHovered(false)
	}

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
				await copyBlock()
				if (activePage.autosavePage) saveBlocksInDB()
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
			title: blockIsHidden ? 'Показать' : 'Скрыть',
			iconType: blockIsHidden ? 'show' : 'hide',
			handler: async () => {
				await setActiveBlock(pageBlocks, blockId)
				await showHideBlock()
				if (activePage.autosavePage) saveBlocksInDB()
			}
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
				<BlockMoveBtn
					parentClass="edit-block-wrapper"
					handler={async (direction) => {
						await setActiveBlock(pageBlocks, blockId)
						moveBlock(direction)
					}}
				/>
			</>}

			{children}
		</div>
	)
}

export default EditBlockWrapper