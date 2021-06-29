import { authActionTypes, IAuthAction, IAuthState } from "../types/auth"

const initialState: IAuthState = {
	email: '',
	password: '',
	error: null,
	messageType: 'basic',
	message: '',
	loading: false
}

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
	switch(action.type) {
		case authActionTypes.REGISTER: return {
			...state, loading: true
		}
		case authActionTypes.REGISTER_SUCCESS: return {
			...state, loading: false, message: action.payload.message, messageType: action.payload.messageType
		}
		case authActionTypes.REGISTER_ERROR: return {
			...state, loading: false, message: action.payload.message, messageType: action.payload.messageType
		}
		case authActionTypes.REGISTER_CLEAR_MESSAGE: return {
			...state, message: '', messageType: 'basic'
		}
		default:
			return state
	}
}