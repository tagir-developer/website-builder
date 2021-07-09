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
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorCreator(e.response.data))
			}

		}
	}
}

export const login = (email: string, password: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authStartCreator())

		try {
			const response = await AuthService.login(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorCreator(e.response.data))
			}

		}

	}
}

export const checkAuth = () => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch(authCeckStartCreator())

		try {
			const response = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)

			dispatch(authSuccessCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(authErrorCreator(e.response.data))
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
				dispatch(authErrorCreator(e.response.data))
			}

		}

	}
}

export const authStartCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_START }
}

export const authCeckStartCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CHECK_START }
}

export const authSuccessCreator = (payload: any): IAuthAction => {
	return { 
		type: authActionTypes.AUTH_SUCCESS, 
		payload 
	}
}

export const authErrorCreator = (payload: any): IAuthAction => {
	return {
		type: authActionTypes.AUTH_ERROR, 
		payload
	}
}

export const authLogoutCreator = (): IAuthAction => {
	return { type: authActionTypes.AUTH_LOGOUT }
}

export const clearRegisterMessage = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CLEAR_MESSAGE }
}

export const authRemoveError = (value: string, errors: string[]): IAuthAction => {
	const payload = errors.filter(i => i !== value)
	return {
		type: authActionTypes.AUTH_REMOVE_ERROR, 
		payload
	}
}