import { IPopupAction, IPopupState, popupActionTypes } from "../types/popup"

const initialState: IPopupState = {
	scroll: 0,
	popupIsOpen: false
}

export default function popupReducer(state = initialState, action: IPopupAction): IPopupState {
	switch(action.type) {
		case popupActionTypes.POPUP_SET_SCROLL: return {
			...state, 
			scroll: action.payload,
		}
		case popupActionTypes.POPUP_CLEAR_SCROLL: return {
			...state, 
			scroll: 0,
		}
		case popupActionTypes.POPUP_SWITCH_POPUP: return {
			...state, 
			popupIsOpen: action.payload
		}
		default:
			return state
	}
}