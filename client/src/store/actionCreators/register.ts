import axios, { AxiosError } from "axios"
import { Dispatch } from "redux"
import { authActionTypes, IAuthAction } from "../types/auth"

export const register = (email: string, password: string, passwordConfirm: string, name?: string) => {
	return async (dispatch: Dispatch<IAuthAction>) => {

		dispatch({type: authActionTypes.REGISTER})

		const authData = {
			email, password, passwordConfirm, name
		}

		try {



			const response = await axios.post('/api/auth/register', authData)

			console.log('TEEEEEEEEST', response.data)

			dispatch({type: authActionTypes.REGISTER_SUCCESS, payload: response.data})

			// if (response.statusText !== 'OK') {
			// 	// dispatch({type: authActionTypes.REGISTER_ERROR, payload: e})
			// 	throw new Error(response.data.message || 'Что-то пошло не так')
			// }
			


		
			// dispatch({type: authActionTypes.REGISTER_ERROR, payload: response})
			
		} catch(error) {
			// dispatch({type: authActionTypes.REGISTER_ERROR, payload: e})
			// throw e
			// console.log('ERR', e.response.data.error)

			const err = error as AxiosError
        if (err.response) {
           console.log(err.response.status)
           console.log(err.response.data)
        }
        
		}

	}
}