export interface IAuthState {
	email: string
	password: string
	message: string
	loading: boolean
	error: null | boolean
}

export enum authActionTypes {
	REGISTER = 'REGISTER',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	REGISTER_ERROR = 'REGISTER_ERROR'
}

interface registerAction {
	type: authActionTypes.REGISTER
}

interface registerSuccessAction {
	type: authActionTypes.REGISTER_SUCCESS
	payload: any
}

interface registerErrorAction {
	type: authActionTypes.REGISTER_ERROR
	payload: any
}

export type IAuthAction = registerAction | registerSuccessAction | registerErrorAction