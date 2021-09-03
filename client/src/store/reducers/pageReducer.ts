import { IPageResponse } from "../../models/response/PageResponse"
import { IPageAction, IPageState, pageActionTypes } from "../types/page"

export const initialState: IPageState = {
	loading: false,
	pages: [] as IPageResponse[],
	pagesNames: [],
	homePageId: '',
	activePage: {} as IPageResponse,
	devicePreview: 'pc',
	previousPath: ''
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
		case pageActionTypes.PAGE_SET_HOME_PAGE: return {
			...state,
			homePageId: action.payload
		}		
		case pageActionTypes.PAGE_SET_ACTIVE_PAGE: return {
			...state,
			activePage: action.payload
		}
		case pageActionTypes.PAGE_SHOW_DEVICE_PREVIEW: return {
			...state,
			devicePreview: action.payload
		}
		case pageActionTypes.PAGE_SET_PATH: return {
			...state,
			previousPath: action.payload
		}
		default:
			return state
	}
}