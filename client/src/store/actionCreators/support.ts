import { AxiosError } from "axios"
import { Dispatch } from "redux"
import SupportService from "../../services/SupportService"
import { ISupportAction, supportActionTypes } from "../types/support"
import { alertErrorOrMessageCreator } from "./alert"

export const sendQuestion = (email: string, message: string, formData: FormData) => {
	return async (dispatch: Dispatch<ISupportAction>) => {

		dispatch(supportStartCreator())

		try {

			formData.set('email', email)
			formData.set('message', message)

			const response = await SupportService.question(formData)

			dispatch(supportEndCreator())
			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(supportEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const sendComplaint = (email: string, message: string) => {
	return async (dispatch: Dispatch<ISupportAction>) => {

		dispatch(supportStartCreator())

		try {

			const response = await SupportService.complaint(email, message)

			dispatch(supportEndCreator())
			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(supportEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const supportStartCreator = (): ISupportAction => {
	return { type: supportActionTypes.SUPPORT_START }
}

export const supportEndCreator = (): ISupportAction => {
	return { type: supportActionTypes.SUPPORT_END }
}
