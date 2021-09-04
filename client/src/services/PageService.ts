import { AxiosResponse } from "axios"
import $api from "../http"
import { IChangePagePublicationStatusResponse, IChangePageResponse, ICopyPageResponse, ICreatePageResponse, IDeletePageResponse, IMakePageHomeResponse, IPageResponse, ISwitchAutosaveResponse } from "../models/response/PageResponse"

export default class PageService {

	static async getPages(projectId: string): Promise<AxiosResponse<IPageResponse[]>> {
		return $api.get<IPageResponse[]>('pages/get-pages/' + projectId)
	}

	static async createPage(projectId: string, name: string, link: string, isHomePage: boolean, openInNewWindow: boolean): Promise<AxiosResponse<ICreatePageResponse>> {
		return $api.post<ICreatePageResponse>('pages/create-new-page', {projectId, name, link, isHomePage, openInNewWindow})
	}

	static async changePage(projectId: string, pageId: string, name: string, link: string, openInNewWindow: boolean): Promise<AxiosResponse<IChangePageResponse>> {
		return $api.put<IChangePageResponse>('pages/change-page', {projectId, pageId, name, link, openInNewWindow})
	}

	static async switchPageAutosave(pageId: string, autosave: boolean): Promise<AxiosResponse<ISwitchAutosaveResponse>> {
		return $api.put<ISwitchAutosaveResponse>('pages/switch-autosave', {pageId, autosave})
	}

	static async changePagePublicationStatus(projectId: string, pageId: string, value: boolean): Promise<AxiosResponse<IChangePagePublicationStatusResponse>> {
		return $api.put<IChangePagePublicationStatusResponse>('pages/change-publication-status', {projectId, pageId, value})
	}

	static async deletePage(pageId: string, projectId: string): Promise<AxiosResponse<IDeletePageResponse>> {
		return $api.delete<IDeletePageResponse>(`pages/delete-page/${projectId}/${pageId}`)
	}

	static async copyPage(projectId: string, pageId: string): Promise<AxiosResponse<ICopyPageResponse>> {
		return $api.post<ICopyPageResponse>('pages/create-copy', {projectId, pageId})
	}

	static async makePageHome(pageId: string, projectId: string): Promise<AxiosResponse<IMakePageHomeResponse>> {
		return $api.put<IMakePageHomeResponse>('pages/make-page-home', {pageId, projectId})
	}

}