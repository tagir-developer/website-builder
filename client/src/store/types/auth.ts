export interface IAuthState {
	email: string
	password: string
	messageType: "basic" | "success" | "warning" | "danger"
	message: string
	loading: boolean
	error: null | boolean
}

export enum authActionTypes {
	REGISTER = 'REGISTER',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	REGISTER_ERROR = 'REGISTER_ERROR',
	REGISTER_CLEAR_MESSAGE = 'REGISTER_CLEAR_MESSAGE'
}

interface registerAction {
	type: authActionTypes.REGISTER
}

interface registerSuccessAction {
	type: authActionTypes.REGISTER_SUCCESS
	payload: {
		messageType: "basic" | "success" | "warning" | "danger"
		message: string
	}
}

interface registerErrorAction {
	type: authActionTypes.REGISTER_ERROR
	payload: {
		messageType: "basic" | "success" | "warning" | "danger"
		message: string
	}
}

interface registerClearMessageAction {
	type: authActionTypes.REGISTER_CLEAR_MESSAGE
}

export type IAuthAction = registerAction | registerSuccessAction | registerErrorAction | registerClearMessageAction