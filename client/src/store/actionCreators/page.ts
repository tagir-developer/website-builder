import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IPageResponse } from "../../models/response/PageResponse"
import PageService from "../../services/PageService"
import { IDeviceTypes, IPageAction, IPageState, pageActionTypes } from "../types/page"
import { IProjectsState } from "../types/projects"
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

		// dispatch(pageStartCreator())

		try {
			const response = await PageService.createPage(projectId, name, link, isHomePage, openInNewWindow)

			dispatch(pagesGetAll(response.data.pages))
			dispatch(savePagesNames(response.data.pages))
			dispatch(setHomePage(response.data.pages))
			dispatch(alertErrorOrMessageCreator(response.data))

			// dispatch(pageEndCreator())
			// dispatch(alertErrorOrMessageCreator(response.data))

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
	return async (dispatch: Dispatch<IPageAction>, getState: () => {projects: IProjectsState}) => {

		// dispatch(pageStartCreator())
		const projectId = getState().projects.activeProject.id

		try {
			const response = await PageService.changePage(projectId, pageId, name, link, openInNewWindow)

			dispatch(pagesGetAll(response.data.pages))
			dispatch(savePagesNames(response.data.pages))
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

export const switchPageAutosave = (autosave: boolean) => {
	return async (dispatch: Dispatch<IPageAction>, getState: () => {page: IPageState}) => {

		const pageId = getState().page.activePage.id

		try {
			const response = await PageService.switchPageAutosave(pageId, autosave)

			dispatch(changeActivePage(response.data.page))

			// if (response.data.page.autosavePage) dispatch(alertErrorOrMessageCreator(response.data))
			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const makePageHome = (pageId: string, projectId: string) => {
	return async (dispatch: Dispatch<IPageAction>, getState: () => {page: IPageState}) => {

		const {homePageId} = getState().page
		if (pageId === homePageId) return

		// dispatch(pageStartCreator())

		try {
			const response = await PageService.makePageHome(pageId, projectId)

			dispatch(pagesGetAll(response.data.pages))
			dispatch(savePagesNames(response.data.pages))
			dispatch(setHomePage(response.data.pages))
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

export const deletePage = (pageId: string, projectId: string) => {
	return async (dispatch: Dispatch<IPageAction>) => {

		// dispatch(pageStartCreator())

		try {
			const response = await PageService.deletePage(pageId, projectId)

			dispatch(pagesGetAll(response.data.pages))
			dispatch(savePagesNames(response.data.pages))
			dispatch(setHomePage(response.data.pages))
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
	return async (dispatch: Dispatch<IPageAction>, getState: () => {projects: IProjectsState}) => {

		// dispatch(pageStartCreator())
		const projectId = getState().projects.activeProject.id

		try {
			const response = await PageService.copyPage(projectId, pageId)

			dispatch(pagesGetAll(response.data.pages))
			dispatch(savePagesNames(response.data.pages))
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

export const pagesGetAll = (payload: IPageResponse[]): IPageAction => {
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

export const setActivePage = (pages: IPageResponse[], pageId: string): IPageAction => {

	const activePage: IPageResponse = pages.filter(i => i.id === pageId)[0]

	return { 
		type: pageActionTypes.PAGE_SET_ACTIVE_PAGE,
		payload: activePage
	}
}

export const changeActivePage = (payload: IPageResponse): IPageAction => {
	return { 
		type: pageActionTypes.PAGE_SET_ACTIVE_PAGE,
		payload
	}
}

export const pageStartCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_START }
}

export const pageEndCreator = (): IPageAction => {
	return { type: pageActionTypes.PAGE_END }
}

export const showDevicePreview = (payload: IDeviceTypes): IPageAction => {
	return { 
		type: pageActionTypes.PAGE_SHOW_DEVICE_PREVIEW,
		payload
	}
}


