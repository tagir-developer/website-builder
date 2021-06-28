import { authActionTypes, IAuthAction, IAuthState } from "../types/auth"

const initialState: IAuthState = {
	email: '',
	password: '',
	message: '',
	loading: false,
	error: null
}

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
	switch(action.type) {
		case authActionTypes.REGISTER: return {
			...state, loading: true
		}
		case authActionTypes.REGISTER_SUCCESS: return {
			...state, loading: false, error: action.payload, message: action.payload.message
		}
		case authActionTypes.REGISTER_ERROR: return {
			...state, loading: false, error: action.payload, message: action.payload.message
		}
		default:
			return state
	}
}