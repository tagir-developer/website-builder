import { AxiosError } from "axios"
import { Dispatch } from "redux"
import UserService from "../../services/UserService"
import { IUserAction, userActionTypes } from "../types/user"
import { alertErrorOrMessageCreator } from "./alert"

export const getUser = (userId: string) => {
	return async (dispatch: Dispatch<IUserAction>) => {

		dispatch(userStartCreator())

		try {

			const response = await UserService.getUser(userId)

			dispatch(userGetUserCreator(response.data.user))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const changeUserEmail = (userId: string, email: string) => {
	return async (dispatch: Dispatch<IUserAction>) => {

		dispatch(userStartCreator())

		try {

			await UserService.changeEmail(userId, email)

			dispatch(userUpdatedCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const changeUserName = (userId: string, name: string) => {
	return async (dispatch: Dispatch<IUserAction>) => {
		dispatch(userStartCreator())
		try {

			await UserService.changeName(userId, name)

			dispatch(userUpdatedCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}
		}
	}
}

export const changeUserPassword = (userId: string, password: string) => {
	return async (dispatch: Dispatch<IUserAction>) => {
		dispatch(userStartCreator())
		try {

			await UserService.changePassword(userId, password)

			dispatch(userUpdatedCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}
		}
	}
}

export const uploadUserAvatar = (userId: string, formData: FormData) => {
	return async (dispatch: Dispatch<IUserAction>) => {

		dispatch(userStartCreator())

		try {

			formData.set('id', userId)

			const response = await UserService.uploadAvatar(formData)

			console.log(response.data.message)

			// dispatch(userGetUserCreator(response.data.user))

			dispatch(userUpdatedCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const deleteUserAvatar = (userId: string) => {
	return async (dispatch: Dispatch<IUserAction>) => {

		dispatch(userStartCreator())

		try {

			const response = await UserService.deleteAvatar(userId)

			console.log(response.data.message)

			dispatch(userUpdatedCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(userEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const userStartCreator = (): IUserAction => {
	return { type: userActionTypes.USER_START }
}

export const userEndCreator = (): IUserAction => {
	return { type: userActionTypes.USER_END }
}

export const userUpdatedCreator = (): IUserAction => {
	return { type: userActionTypes.USER_UPDATED }
}

export const userGetUserCreator = (payload: any): IUserAction => {
	return { 
		type: userActionTypes.USER_GET_USER,
		payload
	}
}
