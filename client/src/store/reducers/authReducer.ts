import { authActionTypes, IAuthAction, IAuthState } from "../types/auth"
import { IUser } from "../../models/IUser"

const initialState: IAuthState = {
	user: {} as IUser,
	isAuth: false,
	messageType: 'basic',
	message: '',
	loading: false
}

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
	switch(action.type) {
		case authActionTypes.AUTH_START: return {
			...state, 
			loading: true
		}
		case authActionTypes.AUTH_SUCCESS: return {
			...state, 
			loading: false,
			isAuth: true,
			user: action.payload.user,
			message: action.payload.message, 
			messageType: action.payload.messageType
		}
		case authActionTypes.AUTH_ERROR: return {
			...state, 
			loading: false, 
			message: action.payload.message, 
			messageType: action.payload.messageType
		}
		case authActionTypes.AUTH_LOGOUT: return {
			...state,
			user: {} as IUser,
			loading: false,
			isAuth: false,
			message: '', 
			messageType: 'basic',  
		}
		case authActionTypes.AUTH_CLEAR_MESSAGE: return {
			...state, 
			message: '', 
			messageType: 'basic'
		}
		default:
			return state
	}
}