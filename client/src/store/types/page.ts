import { IPageResponse } from "../../models/response/PageResponse"
import { IAlertAction } from "./alert"

export interface IPageState {
	loading: boolean
	pages: IPageResponse[]
	pagesNames: string[]
	homePageId: string
}

export enum pageActionTypes {
	PAGE_START = 'PAGE_START',
	PAGE_END = 'PAGE_END',
	PAGE_GET_PAGES = 'PAGE_GET_PAGES',
	PAGE_SAVE_NAMES = 'PAGE_SAVE_NAMES',
	PAGE_SET_HOME_PAGE = 'PAGE_SET_HOME_PAGE'
}

interface pageStartAction {
	type: pageActionTypes.PAGE_START
}

interface pageEndAction {
	type: pageActionTypes.PAGE_END
}

interface pageGetPages {
	type: pageActionTypes.PAGE_GET_PAGES
	payload: IPageResponse[]
}

interface pageSaveNames {
	type: pageActionTypes.PAGE_SAVE_NAMES
	payload: string[]
}

interface pageSetHomePage {
	type: pageActionTypes.PAGE_SET_HOME_PAGE
	payload: string
}

export type IPageAction = IAlertAction | pageStartAction | pageEndAction | pageGetPages | pageSaveNames | pageSetHomePage