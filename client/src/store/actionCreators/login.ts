import { AxiosError } from "axios"
import { Dispatch } from "redux"
import AuthService from "../../services/AuthService"
import { authActionTypes, IAuthAction } from "../types/auth"

export const login = (email: string, password: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch({ type: authActionTypes.AUTH_START })

		try {
			const response = await AuthService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)

			dispatch({ type: authActionTypes.AUTH_SUCCESS, payload: response.data })

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch({type: authActionTypes.AUTH_ERROR, payload: e.response.data})
			}

		}

	}
}

// export const clearRegisterMessage = (): IAuthAction => {
// 	return { type: authActionTypes.REGISTER_CLEAR_MESSAGE }
// }