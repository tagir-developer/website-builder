import { IResetData } from "../../models/IResetData";
import { IUser } from "../../models/IUser";
import { IAuthResponse } from "../../models/response/AuthResponse";

export interface IAuthState {
	user: IUser
	isAuth: boolean
	messageType: "basic" | "success" | "warning" | "danger"
	message: string
	loading: boolean
	checkAuthLoading: boolean
	errors: string[]
	resetData: IResetData
}

export enum authActionTypes {
	AUTH_START = 'AUTH_START',
	AUTH_CHECK_START = 'AUTH_CHECK_START',
	AUTH_SUCCESS = 'AUTH_SUCCESS',
	AUTH_ERROR_OR_MESSAGE = 'AUTH_ERROR_OR_MESSAGE',
	AUTH_REMOVE_ERROR = 'AUTH_REMOVE_ERROR',
	AUTH_CLEAR_MESSAGE = 'AUTH_CLEAR_MESSAGE',
	AUTH_LOGOUT = 'AUTH_LOGOUT',
	AUTH_SET_RESET_DATA = 'AUTH_SET_RESET_DATA',
	AUTH_CLEAR_RESET_DATA = 'AUTH_CLEAR_RESET_DATA',
	AUTH_CLEAR_ERRORS = 'AUTH_CLEAR_ERRORS',
}

interface authStartAction {
	type: authActionTypes.AUTH_START
}

interface authClearErrorsAction {
	type: authActionTypes.AUTH_CLEAR_ERRORS
}

interface authCheckStartAction {
	type: authActionTypes.AUTH_CHECK_START
}

interface authSuccessAction {
	type: authActionTypes.AUTH_SUCCESS
	payload: IAuthResponse
}

interface setResetDataAction {
	type: authActionTypes.AUTH_SET_RESET_DATA
	payload: IResetData
}

interface clearResetDataAction {
	type: authActionTypes.AUTH_CLEAR_RESET_DATA
}

interface authRemoveErrorAction {
	type: authActionTypes.AUTH_REMOVE_ERROR
	payload: string[]
}

interface authErrorAction {
	type: authActionTypes.AUTH_ERROR_OR_MESSAGE
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

export type IAuthAction = clearResetDataAction | setResetDataAction | authStartAction | authSuccessAction | authErrorAction | authClearMessageAction | authLogoutAction | authCheckStartAction | authRemoveErrorAction | authClearErrorsAction