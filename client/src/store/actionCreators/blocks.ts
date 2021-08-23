import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import BlockService from "../../services/BlockService"
import { blockActionTypes, IBlockAction, IBlockState } from "../types/block"
import { alertErrorOrMessageCreator } from "./alert"
import produce from 'immer'
import { WritableDraft } from "immer/dist/internal"


export const getBlocksWithType = (blockType: string) => {
	return async (dispatch: Dispatch<IBlockAction>) => {

		dispatch(blockStartCreator())

		try {
			const response = await BlockService.getWithType(blockType)

			dispatch(blockGetBlocksList(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const getPageBlocks = (pageId: string) => {
	return async (dispatch: Dispatch<IBlockAction>) => {

		dispatch(blockStartCreator())

		try {
			const response = await BlockService.getPageBlocks(pageId)

			dispatch(blockGetPageBlocks(response.data))
			dispatch(addBlocksToChangeHistory([], response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const addBlockToPage = (pageId: string, blockId: string) => {
	return async (dispatch: Dispatch<IBlockAction>) => {

		// dispatch(blockStartCreator())

		try {
			const response = await BlockService.addBlockToPage(pageId, blockId)

			dispatch(blockGetPageBlocks(response.data.blocks))
			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				// dispatch(blockEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const addBlocksToChangeHistory = (changeHistory: Array<IPageBlocksResponse[]>, blocks: IPageBlocksResponse[]): IBlockAction => {

	const newChangeHistory = [...changeHistory, blocks].slice(-4)

	return {
		type: blockActionTypes.BLOCK_ADD_TO_CHANGE_HISTORY,
		payload: newChangeHistory
	}
}

export const changeBlockConfigs = (configObject: any) => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const blockId: string = getState().block.activeBlock.blockId

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			draft.filter(i => i.blockId === blockId)[0].blockConfigs = configObject
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		dispatch(saveBlockConfigs(newBlockList))
	}
}

export const changeBlockContent = (contentObject: any) => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks
		const blockId: string = getState().block.activeBlock.blockId

		const newBlockList: IPageBlocksResponse[] = produce(blocks, (draft: IPageBlocksResponse[]) => {
			draft.filter(i => i.blockId === blockId)[0].blockContent = contentObject
		})

		dispatch(addBlocksToChangeHistory(changeHistory, newBlockList))
		dispatch(saveBlockConfigs(newBlockList))
	}
}

export const blockUndoChange = () => {
	return (dispatch: Dispatch<IBlockAction>, getState: () => { block: IBlockState }) => {

		const changeHistory: Array<IPageBlocksResponse[]> = getState().block.changeHistory
		const blocks: IPageBlocksResponse[] = getState().block.pageBlocks

		if (changeHistory.length <= 1) return

		let newChangeHistory: Array<IPageBlocksResponse[]> = [...changeHistory]
		newChangeHistory.pop()

		const prevState: IPageBlocksResponse[] | undefined = newChangeHistory[newChangeHistory.length - 1]
		const previousBlockList: IPageBlocksResponse[] = prevState ? prevState : blocks

		dispatch(blockGetPageBlocks(previousBlockList))
		dispatch(updateChangeHistory(newChangeHistory))

	}
}

export const updateChangeHistory = (payload: Array<IPageBlocksResponse[]>): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_UPDATE_CHANGE_HISTORY,
		payload
	}
}

export const saveBlockConfigs = (payload: IPageBlocksResponse[]): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_SAVE_BLOCK_CONFIGS,
		payload
	}
}

export const setActiveBlock = (blocks: IPageBlocksResponse[], blockId: string): IBlockAction => {

	const activeBlock: IPageBlocksResponse = blocks.filter(i => i.blockId === blockId)[0]

	return {
		type: blockActionTypes.BLOCK_SET_ACTIVE_BLOCK,
		payload: activeBlock
	}
}

export const blockStartCreator = (): IBlockAction => {
	return { type: blockActionTypes.BLOCK_START }
}

export const blockEndCreator = (): IBlockAction => {
	return { type: blockActionTypes.BLOCK_END }
}

export const blockGetBlocksList = (payload: IBlockResponse[]): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_GET_BLOCKS_LIST,
		payload
	}
}

export const blockGetPageBlocks = (payload: IPageBlocksResponse[]): IBlockAction => {
	return {
		type: blockActionTypes.BLOCK_GET_PAGE_BLOCKS,
		payload
	}
}
