import { IUser } from "../../models/IUser"
import { IUserAction, IUserState, userActionTypes } from "../types/user"

const initialState: IUserState = {
	loading: false,
	user: {} as IUser,
	isUpdated: false
}

export default function userReducer(state = initialState, action: IUserAction): IUserState {
	switch(action.type) {
		case userActionTypes.USER_START: return {
			...state, 
			loading: true,
			isUpdated: false
		}
		case userActionTypes.USER_END: return {
			...state, 
			loading: false,
		}
		case userActionTypes.USER_GET_USER: return {
			...state, 
			user: action.payload,
			loading: false
		}
		case userActionTypes.USER_UPDATED: return {
			...state, 
			loading: false,
			isUpdated: true
		}
		default:
			return state
	}
}