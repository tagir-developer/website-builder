import { AxiosResponse } from "axios"
import $api from "../http"
import { ICreatePageResponse, IPageResponse } from "../models/response/PageResponse"

export default class PageService {

	static async getPages(projectId: string): Promise<AxiosResponse<IPageResponse[]>> {
		return $api.get<IPageResponse[]>('pages/get-pages/' + projectId)
	}

	static async createPage(projectId: string, name: string, link: string, isHomePage: boolean, openInNewWindow: boolean): Promise<AxiosResponse<ICreatePageResponse>> {
		return $api.post<ICreatePageResponse>('pages/create-new-page', {projectId, name, link, isHomePage, openInNewWindow})
	}


}