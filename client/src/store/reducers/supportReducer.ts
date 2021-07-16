import { ISupportAction, ISupportState, supportActionTypes } from "../types/support"

const initialState: ISupportState = {
	messageType: 'basic',
	message: '',
	loading: false,
	errors: [],
}

export default function supportReducer(state = initialState, action: ISupportAction): ISupportState {
	switch(action.type) {
		case supportActionTypes.SUPPORT_START: return {
			...state, 
			loading: true,
		}
		case supportActionTypes.SUPPORT_ERROR_OR_MESSAGE: return {
			...state, 
			loading: false,
			message: action.payload.message, 
			messageType: action.payload.messageType,
			errors: action.payload.errors
		}
		case supportActionTypes.SUPPORT_CLEAR_MESSAGE: return {
			...state, 
			message: '', 
			messageType: 'basic'
		}
		case supportActionTypes.SUPPORT_REMOVE_ERROR: return {
			...state, 
			errors: action.payload
		}
		default:
			return state
	}
}