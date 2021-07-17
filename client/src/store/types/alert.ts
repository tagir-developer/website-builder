export interface IAlertState {
	messageType: "basic" | "success" | "warning" | "danger"
	message: string
	errors: string[]
}

export enum alertActionTypes {
	ALERT_ERROR_OR_MESSAGE = 'ALERT_ERROR_OR_MESSAGE',
	ALERT_REMOVE_ERROR = 'ALERT_REMOVE_ERROR',
	ALERT_CLEAR_MESSAGE = 'ALERT_CLEAR_MESSAGE',
	ALERT_CLEAR_ERRORS = 'ALERT_CLEAR_ERRORS'
}

interface alertRemoveErrorAction {
	type: alertActionTypes.ALERT_REMOVE_ERROR
	payload: string[]
}

interface alertClearErrorsAction {
	type: alertActionTypes.ALERT_CLEAR_ERRORS
}

interface alertErrorAction {
	type: alertActionTypes.ALERT_ERROR_OR_MESSAGE
	payload: {
		messageType: "basic" | "success" | "warning" | "danger"
		message: string
		errors: any[]
	}
}

interface alertClearMessageAction {
	type: alertActionTypes.ALERT_CLEAR_MESSAGE
}

export type IAlertAction = alertRemoveErrorAction | alertErrorAction | alertClearMessageAction | alertClearErrorsAction