import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { ITemplateResponse } from "../../models/response/TemplateResponse"
import TemplateService from "../../services/TemplateService"
import { ITemplateAction, templateActionTypes } from "../types/template"
import { alertErrorOrMessageCreator } from "./alert"

export const getAllTemplates = () => {
	return async (dispatch: Dispatch<ITemplateAction>) => {

		dispatch(templateStartCreator())

		try {
			const response = await TemplateService.getAllTemplates()

			dispatch(templateGetAll(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(templateEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const getTemplatesWithType = (templateType: string) => {
	return async (dispatch: Dispatch<ITemplateAction>) => {

		dispatch(templateStartCreator())

		try {
			const response = await TemplateService.getWithType(templateType)

			dispatch(templateGetAll(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(templateEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const templateStartCreator = (): ITemplateAction => {
	return { type: templateActionTypes.TEMPLATE_START }
}

export const templateEndCreator = (): ITemplateAction => {
	return { type: templateActionTypes.TEMPLATE_END }
}

export const templateGetAll = (payload: ITemplateResponse[]): ITemplateAction => {
	return { 
		type: templateActionTypes.TEMPLATE_GET_ALL,
		payload
	}
}
