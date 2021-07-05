import axios, { AxiosError } from "axios"
import { Dispatch } from "redux"
import { authActionTypes, IAuthAction } from "../types/auth"

export const register = (email: string, password: string, passwordConfirm: string, name?: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch({ type: authActionTypes.AUTH_START })

		const authData = {
			email, password, passwordConfirm, name
		}

		try {
			const response = await axios.post('/api/auth/register', authData)

			dispatch({ type: authActionTypes.AUTH_SUCCESS, payload: response.data })

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch({type: authActionTypes.AUTH_ERROR, payload: e.response.data})
			}

		}

	}
}

export const clearRegisterMessage = (): IAuthAction => {
	return { type: authActionTypes.AUTH_CLEAR_MESSAGE }
}