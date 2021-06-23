import axios from "axios"
import { AnyAction, Dispatch } from "redux"
import { authActionTypes, IAuthAction } from "../types/auth"


export function register(email: string, password: string, passwordConfirm: string, name?: string) {
	return async (dispatch: Dispatch<IAuthAction>) => {
		const authData = {
			email, password, passwordConfirm, name
		}

		const response = await axios.post('/api/auth/register', authData)

		console.log("ATTENTION", response.data.message)

		dispatch<any>({type: authActionTypes.REGISTER_SUCCESS, payload: response.data.message})

	}
}