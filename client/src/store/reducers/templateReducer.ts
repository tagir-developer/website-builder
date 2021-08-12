import { ITemplateResponse } from "../../models/response/TemplateResponse"
import { ITemplateAction, ITemplateState, templateActionTypes } from "../types/template"

export const initialState: ITemplateState = {
	loading: false,
	templates: [] as ITemplateResponse[]
}

export default function templateReducer(state = initialState, action: ITemplateAction): ITemplateState {
	switch(action.type) {
		case templateActionTypes.TEMPLATE_START: return {
			...state, 
			loading: true,
		}
		case templateActionTypes.TEMPLATE_END: return {
			...state, 
			loading: false,
		}
		case templateActionTypes.TEMPLATE_GET_ALL: return {
			...state,
			templates: action.payload,
			loading: false,
		}
		default:
			return state
	}
}