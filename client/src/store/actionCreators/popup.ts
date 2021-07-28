import { IPopupAction, popupActionTypes } from "../types/popup"

export const popupSetScroll = (payload: any): IPopupAction => {
	return { 
		type: popupActionTypes.POPUP_SET_SCROLL,
		payload
	}
}

export const popupClearScroll = (): IPopupAction => {
	return { type: popupActionTypes.POPUP_CLEAR_SCROLL }
}

export const popupSwitchPopup = (payload: any): IPopupAction => {
	return { 
		type: popupActionTypes.POPUP_SWITCH_POPUP,
		payload
	}
}
