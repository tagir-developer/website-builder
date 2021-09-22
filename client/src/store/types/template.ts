import { ITemplateResponse } from "../../models/response/TemplateResponse"
import { IAlertAction } from "./alert"

export interface ITemplateState {
	loading: boolean
	templates: ITemplateResponse[]
}

export enum templateActionTypes {
	TEMPLATE_START = 'TEMPLATE_START',
	TEMPLATE_END = 'TEMPLATE_END',
	TEMPLATE_GET_ALL = 'TEMPLATE_GET_ALL',
}

interface templateStartAction {
	type: templateActionTypes.TEMPLATE_START
}

interface templateEndAction {
	type: templateActionTypes.TEMPLATE_END
}

interface templateGetAll {
	type: templateActionTypes.TEMPLATE_GET_ALL
	payload: ITemplateResponse[]
}


export type ITemplateAction = IAlertAction | templateStartAction | templateEndAction | templateGetAll