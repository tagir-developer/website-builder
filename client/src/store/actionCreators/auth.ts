import axios, { AxiosError } from "axios"
import { Dispatch } from "redux"
import { API_URL } from "../../http"
import { IAuthResponse } from "../../models/response/AuthResponse"
import AuthService from "../../services/AuthService"
import { authActionTypes, IAuthAction } from "../types/auth"

export const register = (email: string, password: string, passwordConfirm: string, name?: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.registration(email, password, passwordConfirm, name)
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const login = (email: string, password: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const checkAuth = () => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authCheckStartCreator())

		try {
			const response = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const logout = () => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			await AuthService.logout()
			localStorage.removeItem('token')

			dispatch(authLogoutCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const passReset = (email: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.reset(email)

			dispatch(authErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const resetTokenCheck = (token: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.password(token)

			dispatch(setResetData(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const changePassword = (password: string, passwordConfirm: string, userId: string, token: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.changePassword(password, passwordConfirm, userId, token)

			dispatch(authErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorOrMessageCreator(e.response.data))
			}

		}

	}
}

export const authStartCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_START }
}

export const authCheckStartCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CHECK_START }
}

export const setResetData = (payload: any): IAuthAction => {
	return { 
		type: authActionTypes.AUTH_SET_RESET_DATA, 
		payload 
	}
}

export const clearResetData = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CLEAR_RESET_DATA }
}

export const authSuccessCreator = (payload: any): IAuthAction => {
	return { 
		type: authActionTypes.AUTH_SUCCESS, 
		payload 
	}
}

export const authErrorOrMessageCreator = (payload: any): IAuthAction => {
	return {
		type: authActionTypes.AUTH_ERROR_OR_MESSAGE, 
		payload
	}
}

export const authLogoutCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_LOGOUT }
}

export const clearRegisterMessage = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CLEAR_MESSAGE }
}

export const authClearErrors = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CLEAR_ERRORS }
}

export const authRemoveError = (value: string, errors: string[]): IAuthAction => {
	const payload = errors.filter(i => i !== value)
	return {
		type: authActionTypes.AUTH_REMOVE_ERROR, 
		payload
	}
}