import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import { IAlertAction } from "./alert"

export interface IBlockState {
	loading: boolean
	// activeBlockType: string
	blockCards: IBlockResponse[]
	pageBlocks: IPageBlocksResponse[]
	activeBlock: IPageBlocksResponse
	changeHistory: Array<IPageBlocksResponse[]> // ! История изменений - массив из трех предыдущих состояний страницы
}

export enum blockActionTypes {
	BLOCK_START = 'BLOCK_START',
	BLOCK_END = 'BLOCK_END',
	BLOCK_GET_BLOCKS_LIST = 'BLOCK_GET_BLOCKS_LIST',
	BLOCK_GET_PAGE_BLOCKS = 'BLOCK_GET_PAGE_BLOCKS',
	BLOCK_SET_ACTIVE_BLOCK = 'BLOCK_SET_ACTIVE_BLOCK',
	BLOCK_ADD_TO_CHANGE_HISTORY = 'BLOCK_ADD_TO_CHANGE_HISTORY',
	BLOCK_SAVE_BLOCK_CONFIGS = 'BLOCK_SAVE_BLOCK_CONFIGS',
	BLOCK_UPDATE_CHANGE_HISTORY = 'BLOCK_UPDATE_CHANGE_HISTORY'
}

interface blockStartAction {
	type: blockActionTypes.BLOCK_START
}

interface blockEndAction {
	type: blockActionTypes.BLOCK_END
}

interface blockGetWithType {
	type: blockActionTypes.BLOCK_GET_BLOCKS_LIST
	payload: IBlockResponse[]
}

interface blockGetPageBlocksType {
	type: blockActionTypes.BLOCK_GET_PAGE_BLOCKS
	payload: IPageBlocksResponse[]
}

interface blockAddToChangeHistoryType {
	type: blockActionTypes.BLOCK_ADD_TO_CHANGE_HISTORY
	payload: Array<IPageBlocksResponse[]>
}

interface blockUpdateChangeHistoryType {
	type: blockActionTypes.BLOCK_UPDATE_CHANGE_HISTORY
	payload: Array<IPageBlocksResponse[]>
}

interface blockSetActiveBlockType {
	type: blockActionTypes.BLOCK_SET_ACTIVE_BLOCK
	payload: IPageBlocksResponse
}

interface blockChangeBlockConfigsType {
	type: blockActionTypes.BLOCK_SAVE_BLOCK_CONFIGS
	payload: IPageBlocksResponse[]
}

export type IBlockAction = IAlertAction | blockUpdateChangeHistoryType | blockChangeBlockConfigsType | blockAddToChangeHistoryType | blockStartAction | blockEndAction | blockGetWithType | blockGetPageBlocksType | blockSetActiveBlockType