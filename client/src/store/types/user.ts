import { IUser } from "../../models/IUser";
import { IAlertAction } from "./alert";

export interface IUserState {
	loading: boolean
	user: IUser
	isUpdated: boolean
}

export enum userActionTypes {
	USER_START = 'USER_START',
	USER_END = 'USER_END',
	USER_GET_USER = 'USER_GET_USER',
	USER_UPDATED = 'USER_UPDATED'
}

interface userStartAction {
	type: userActionTypes.USER_START
}

interface userUpdatedAction {
	type: userActionTypes.USER_UPDATED
}

interface userEndAction {
	type: userActionTypes.USER_END
}

interface userGetUserAction {
	type: userActionTypes.USER_GET_USER
	payload: IUser
}


export type IUserAction = userStartAction | userEndAction | IAlertAction | userGetUserAction | userUpdatedAction