import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import BlockService from "../../services/BlockService"
import { blockActionTypes, IBlockAction } from "../types/block"
import { alertErrorOrMessageCreator } from "./alert"


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
