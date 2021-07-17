import { alertActionTypes, IAlertAction, IAlertState } from "../types/alert"

const initialState: IAlertState = {
	messageType: 'basic',
	message: '',
	errors: [],
}

export default function alertReducer(state = initialState, action: IAlertAction): IAlertState {
	switch(action.type) {
		case alertActionTypes.ALERT_ERROR_OR_MESSAGE: return {
			...state, 
			message: action.payload.message, 
			messageType: action.payload.messageType,
			errors: action.payload.errors
		}
		case alertActionTypes.ALERT_CLEAR_MESSAGE: return {
			...state, 
			message: '', 
			messageType: 'basic'
		}
		case alertActionTypes.ALERT_REMOVE_ERROR: return {
			...state, 
			errors: action.payload
		}
		case alertActionTypes.ALERT_CLEAR_ERRORS: return {
			...state, 
			errors: []
		}
		default:
			return state
	}
}