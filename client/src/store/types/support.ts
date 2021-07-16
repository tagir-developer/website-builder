export interface ISupportState {
	messageType: "basic" | "success" | "warning" | "danger"
	message: string
	loading: boolean
	errors: string[]
}

export enum supportActionTypes {
	SUPPORT_START = 'SUPPORT_START',
	SUPPORT_ERROR_OR_MESSAGE = 'SUPPORT_ERROR_OR_MESSAGE',
	SUPPORT_REMOVE_ERROR = 'SUPPORT_REMOVE_ERROR',
	SUPPORT_CLEAR_MESSAGE = 'SUPPORT_CLEAR_MESSAGE'
}

interface supportStartAction {
	type: supportActionTypes.SUPPORT_START
}



interface supportRemoveErrorAction {
	type: supportActionTypes.SUPPORT_REMOVE_ERROR
	payload: string[]
}

interface supportErrorAction {
	type: supportActionTypes.SUPPORT_ERROR_OR_MESSAGE
	payload: {
		messageType: "basic" | "success" | "warning" | "danger"
		message: string
		errors: any[]
	}
}

interface supportClearMessageAction {
	type: supportActionTypes.SUPPORT_CLEAR_MESSAGE
}

export type ISupportAction = supportStartAction | supportRemoveErrorAction | supportErrorAction | supportClearMessageAction