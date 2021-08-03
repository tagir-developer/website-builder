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
			dispatch(setHomePage(response.data))

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

			dispatch(pageEndCreator())
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

export const changePage = (pageId: string, name: string, link: string, openInNewWindow: boolean) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.changePage(pageId, name, link, openInNewWindow)

			dispatch(pageEndCreator())
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

export const makePageHome = (pageId: string, projectId: string) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.makePageHome(pageId, projectId)

			dispatch(pageEndCreator())
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

export const deletePage = (pageId: string) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.deletePage(pageId)

			dispatch(pageEndCreator())
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

export const copyPage = (pageId: string) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		dispatch(pageStartCreator())

		try {
			const response = await PageService.copyPage(pageId)

			dispatch(pageEndCreator())
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

export const setHomePage = (pages: IPageResponse[]): IPageAction => {

	const homePageId: string = pages.filter(i => i.isHomePage === true)[0].id

	return { 
		type: pageActionTypes.PAGE_SET_HOME_PAGE,
		payload: homePageId
	}
}

export const pageStartCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_START }
}

export const pageEndCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_END }
}


