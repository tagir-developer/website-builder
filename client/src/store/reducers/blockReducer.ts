import { IBlockResponse, IPageBlocksResponse } from "../../models/response/BlockResponse"
import { blockActionTypes, IBlockAction, IBlockState } from "../types/block"

export const initialState: IBlockState = {
	loading: false,
	blockCards: [] as IBlockResponse[],
	pageBlocks: [] as IPageBlocksResponse[],
	activeBlock: {} as IPageBlocksResponse,
	changeHistory: [] as Array<IPageBlocksResponse[]>
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
		case blockActionTypes.BLOCK_SET_ACTIVE_BLOCK: return {
			...state,
			activeBlock: action.payload
		}
		case blockActionTypes.BLOCK_ADD_TO_CHANGE_HISTORY: return {
			...state,
			changeHistory: action.payload
		}
		case blockActionTypes.BLOCK_UPDATE_CHANGE_HISTORY: return {
			...state,
			changeHistory: action.payload
		}
		case blockActionTypes.BLOCK_SAVE_BLOCK_CONFIGS: return {
			...state,
			pageBlocks: action.payload
		}
		default:
			return state
	}
}