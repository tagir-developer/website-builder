import { authActionTypes, IAuthAction, IAuthState } from "../types/auth"
import { IUser } from "../../models/IUser"
import { IResetData } from "../../models/IResetData"

const initialState: IAuthState = {
	user: {} as IUser,
	isAuth: false,
	messageType: 'basic',
	message: '',
	loading: false,
	checkAuthLoading: false,
	errors: [],
	resetData: {} as IResetData
}

export default function authReducer(state = initialState, action: IAuthAction): IAuthState {
	switch(action.type) {
		case authActionTypes.AUTH_CHECK_START: return {
			...state, 
			checkAuthLoading: true,
		}
		case authActionTypes.AUTH_START: return {
			...state, 
			loading: true,
		}
		case authActionTypes.AUTH_SUCCESS: return {
			...state, 
			loading: false,
			checkAuthLoading: false,
			isAuth: true,
			user: action.payload.user,
			message: action.payload.message, 
			messageType: action.payload.messageType
		}
		case authActionTypes.AUTH_ERROR_OR_MESSAGE: return {
			...state, 
			loading: false,
			checkAuthLoading: false, 
			message: action.payload.message, 
			messageType: action.payload.messageType,
			errors: action.payload.errors
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
		case authActionTypes.AUTH_REMOVE_ERROR: return {
			...state, 
			errors: action.payload
		}
		case authActionTypes.AUTH_SET_RESET_DATA: return {
			...state,
			loading: false,
			resetData: action.payload
		}
		case authActionTypes.AUTH_CLEAR_RESET_DATA: return {
			...state, 
			resetData: {} as IResetData
		}
		case authActionTypes.AUTH_CLEAR_ERRORS: return {
			...state, 
			errors: []
		}
		default:
			return state
	}
}