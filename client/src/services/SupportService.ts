import { AxiosResponse } from "axios"
import $api from "../http"
import { ISupportResponse } from "../models/response/SupportResponse"


export default class SupportService {

	static async question(data: FormData): Promise<AxiosResponse<ISupportResponse>> {
		return $api.post<ISupportResponse>('support/question', data, {headers: {
			'Content-Type': 'multipart/form-data'
		}})
	}

	static async complaint(email: string, message: string): Promise<AxiosResponse<ISupportResponse>> {
		return $api.post<ISupportResponse>('support/complaint', {email, message})
	}
}