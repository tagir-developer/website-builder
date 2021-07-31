import { IPageResponse } from "../../models/response/PageResponse"
import { IPageAction, IPageState, pageActionTypes } from "../types/page"

const initialState: IPageState = {
	loading: false,
	pages: [] as IPageResponse[],
	pagesNames: []
}

export default function pageReducer(state = initialState, action: IPageAction): IPageState {
	switch(action.type) {
		case pageActionTypes.PAGE_START: return {
			...state, 
			loading: true,
		}
		case pageActionTypes.PAGE_END: return {
			...state, 
			loading: false,
		}
		case pageActionTypes.PAGE_GET_PAGES: return {
			...state,
			pages: action.payload,
			loading: false,
		}
		case pageActionTypes.PAGE_SAVE_NAMES: return {
			...state,
			pagesNames: action.payload
		}
		default:
			return state
	}
}