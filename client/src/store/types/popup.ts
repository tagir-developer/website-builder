
export interface IPopupState {
	scroll: number
	popupIsOpen: boolean
}

export enum popupActionTypes {
	POPUP_SET_SCROLL = 'POPUP_SET_SCROLL',
	POPUP_CLEAR_SCROLL = 'POPUP_CLEAR_SCROLL',
	POPUP_SWITCH_POPUP = 'POPUP_SWITCH_POPUP'
}

interface popupSetScrollAction {
	type: popupActionTypes.POPUP_SET_SCROLL
	payload: number
}

interface popupClearScrollAction {
	type: popupActionTypes.POPUP_CLEAR_SCROLL
}

interface popupSwitchPopupAction {
	type: popupActionTypes.POPUP_SWITCH_POPUP
	payload: boolean
}


export type IPopupAction = popupSetScrollAction | popupClearScrollAction | popupSwitchPopupAction