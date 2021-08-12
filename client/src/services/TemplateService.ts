import { AxiosResponse } from "axios"
import $api from "../http"
import { ITemplateResponse } from "../models/response/TemplateResponse"

export default class TemplateService {

	static async getAllTemplates(): Promise<AxiosResponse<ITemplateResponse[]>> {
		return $api.get<ITemplateResponse[]>('template/get-all')
	}
	static async getWithType(templateType: string): Promise<AxiosResponse<ITemplateResponse[]>> {
		return $api.get<ITemplateResponse[]>(`template/get-with-type/${templateType}`)
	}

}