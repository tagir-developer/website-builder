import { AxiosError } from "axios"
import { Dispatch } from "redux"
import SupportService from "../../services/SupportService"
import { ISupportAction, supportActionTypes } from "../types/support"

export const sendQuestion = (email: string, message: string, formData: FormData) => {
	return async (dispatch: Dispatch<ISupportAction>) => {

		dispatch(supportStartCreator())

		try {

			formData.set('email', email)
			formData.set('message', message)

			const response = await SupportService.question(formData)

			dispatch(supportErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(supportErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const sendComplaint = (email: string, message: string) => {
	return async (dispatch: Dispatch<ISupportAction>) => {

		dispatch(supportStartCreator())

		try {

			const response = await SupportService.complaint(email, message)

			dispatch(supportErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(supportErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const supportStartCreator = (): ISupportAction => {
	return { type: supportActionTypes.SUPPORT_START }
}

export const supportErrorOrMessageCreator = (payload: any): ISupportAction => {
	return {
		type: supportActionTypes.SUPPORT_ERROR_OR_MESSAGE, 
		payload
	}
}

export const supportClearRegisterMessage = (): ISupportAction => {
	return { type: supportActionTypes.SUPPORT_CLEAR_MESSAGE }
}

export const supportRemoveError = (value: string, errors: string[]): ISupportAction => {
	const payload = errors.filter(i => i !== value)
	return {
		type: supportActionTypes.SUPPORT_REMOVE_ERROR, 
		payload
	}
}