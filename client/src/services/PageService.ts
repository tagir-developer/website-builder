import { AxiosResponse } from "axios"
import $api from "../http"
import { IChangePageResponse, ICopyPageResponse, ICreatePageResponse, IDeletePageResponse, IMakePageHomeResponse, IPageResponse } from "../models/response/PageResponse"

export default class PageService {

	static async getPages(projectId: string): Promise<AxiosResponse<IPageResponse[]>> {
		return $api.get<IPageResponse[]>('pages/get-pages/' + projectId)
	}

	static async createPage(projectId: string, name: string, link: string, isHomePage: boolean, openInNewWindow: boolean): Promise<AxiosResponse<ICreatePageResponse>> {
		return $api.post<ICreatePageResponse>('pages/create-new-page', {projectId, name, link, isHomePage, openInNewWindow})
	}

	static async changePage(pageId: string, name: string, link: string, openInNewWindow: boolean): Promise<AxiosResponse<IChangePageResponse>> {
		return $api.put<IChangePageResponse>('pages/change-page', {pageId, name, link, openInNewWindow})
	}

	static async deletePage(pageId: string): Promise<AxiosResponse<IDeletePageResponse>> {
		return $api.delete<IDeletePageResponse>(`pages/delete-page/${pageId}`)
	}

	static async copyPage(pageId: string): Promise<AxiosResponse<ICopyPageResponse>> {
		return $api.post<ICopyPageResponse>(`pages/create-copy/${pageId}`)
	}

	static async makePageHome(pageId: string, projectId: string): Promise<AxiosResponse<IMakePageHomeResponse>> {
		return $api.put<IMakePageHomeResponse>('pages/make-page-home', {pageId, projectId})
	}

}