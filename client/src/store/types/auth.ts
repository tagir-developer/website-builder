import { IUser } from "../../models/IUser";
import { IAuthResponse } from "../../models/response/AuthResponse";

export interface IAuthState {
	user: IUser
	isAuth: boolean
	messageType: "basic" | "success" | "warning" | "danger"
	message: string
	loading: boolean
	checkAuthLoading: boolean
	errors: any
}

export enum authActionTypes {
	AUTH_START = 'AUTH_START',
	AUTH_CHECK_START = 'AUTH_CHECK_START',
	AUTH_SUCCESS = 'AUTH_SUCCESS',
	AUTH_ERROR = 'AUTH_ERROR',
	AUTH_CLEAR_MESSAGE = 'AUTH_CLEAR_MESSAGE',
	AUTH_LOGOUT = 'AUTH_LOGOUT',
}

interface authStartAction {
	type: authActionTypes.AUTH_START
}

interface authCheckStartAction {
	type: authActionTypes.AUTH_CHECK_START
}

interface authSuccessAction {
	type: authActionTypes.AUTH_SUCCESS
	payload: IAuthResponse
}

interface authErrorAction {
	type: authActionTypes.AUTH_ERROR
	payload: {
		messageType: "basic" | "success" | "warning" | "danger"
		message: string
		errors: any[]
	}
}

interface authLogoutAction {
	type: authActionTypes.AUTH_LOGOUT
}

interface authClearMessageAction {
	type: authActionTypes.AUTH_CLEAR_MESSAGE
}

export type IAuthAction = authStartAction | authSuccessAction | authErrorAction | authClearMessageAction | authLogoutAction | authCheckStartAction