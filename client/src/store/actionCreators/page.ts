import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IPageResponse } from "../../models/response/PageResponse"
import PageService from "../../services/PageService"
import { IPageAction, pageActionTypes } from "../types/page"
import { alertErrorOrMessageCreator } from "./alert"

export const getProjectPages = (projectId: string) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.getPages(projectId)

			dispatch(pagesGetAll(response.data))
			dispatch(savePagesNames(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(pageEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const createNewPage = (projectId: string, name: string, link: string, isHomePage: boolean, openInNewWindow: boolean) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.createPage(projectId, name, link, isHomePage, openInNewWindow)

			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(pageEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const pagesGetAll = (payload: any): IPageAction => {
	return { 
		type: pageActionTypes.PAGE_GET_PAGES,
		payload
	}
}

export const savePagesNames = (pages: IPageResponse[]): IPageAction => {

	const pagesNames: string[] = pages.map(i => '/' + i.link)

	return { 
		type: pageActionTypes.PAGE_SAVE_NAMES,
		payload: pagesNames
	}
}

export const pageStartCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_START }
}

export const pageEndCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_END }
}


