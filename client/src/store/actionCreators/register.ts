import axios, { AxiosError } from "axios"
import { Dispatch } from "redux"
import { authActionTypes, IAuthAction } from "../types/auth"

export const register = (email: string, password: string, passwordConfirm: string, name?: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch({ type: authActionTypes.REGISTER })

		const authData = {
			email, password, passwordConfirm, name
		}

		try {
			const response = await axios.post('/api/auth/register', authData)

			dispatch({ type: authActionTypes.REGISTER_SUCCESS, payload: response.data })

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch({type: authActionTypes.REGISTER_ERROR, payload: e.response.data})
			}

		}

	}
}

export const clearRegisterMessage = (): IAuthAction => {
	return { type: authActionTypes.REGISTER_CLEAR_MESSAGE }
}