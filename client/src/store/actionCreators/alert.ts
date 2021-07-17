import { alertActionTypes, IAlertAction } from "../types/alert"

export const alertErrorOrMessageCreator = (payload: any): IAlertAction => {
	return {
		type: alertActionTypes.ALERT_ERROR_OR_MESSAGE, 
		payload
	}
}

export const alertClearMessage = (): IAlertAction => {
	return { type: alertActionTypes.ALERT_CLEAR_MESSAGE }
}

export const alertClearErrors = (): IAlertAction => {
	return { type: alertActionTypes.ALERT_CLEAR_ERRORS }
}

export const alertRemoveError = (value: string, errors: string[]): IAlertAction => {
	const payload = errors.filter(i => i !== value)
	return {
		type: alertActionTypes.ALERT_REMOVE_ERROR, 
		payload
	}
}