import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import { blockActionTypes, IBlockAction, IBlockState } from "../types/block"

export const initialState: IBlockState = {
	loading: false,
	blockCards: [] as IBlockResponse[],
	pageBlocks: [] as IPageBlocksResponse[]
}

export default function blockReducer(state = initialState, action: IBlockAction): IBlockState {
	switch(action.type) {
		case blockActionTypes.BLOCK_START: return {
			...state, 
			loading: true,
		}
		case blockActionTypes.BLOCK_END: return {
			...state, 
			loading: false,
		}
		case blockActionTypes.BLOCK_GET_BLOCKS_LIST: return {
			...state,
			blockCards: action.payload,
			loading: false,
		}
		case blockActionTypes.BLOCK_GET_PAGE_BLOCKS: return {
			...state,
			pageBlocks: action.payload,
			loading: false,
		}
		default:
			return state
	}
}