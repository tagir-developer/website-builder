import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import { IAlertAction } from "./alert"

export interface IBlockState {
	loading: boolean
	// activeBlockType: string
	blockCards: IBlockResponse[]
	pageBlocks: IPageBlocksResponse[]
}

export enum blockActionTypes {
	BLOCK_START = 'BLOCK_START',
	BLOCK_END = 'BLOCK_END',
	BLOCK_GET_BLOCKS_LIST = 'BLOCK_GET_BLOCKS_LIST',
	BLOCK_GET_PAGE_BLOCKS = 'BLOCK_GET_PAGE_BLOCKS'
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


export type IBlockAction = IAlertAction | blockStartAction | blockEndAction | blockGetWithType | blockGetPageBlocksType