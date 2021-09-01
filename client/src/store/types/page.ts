import { IPageResponse } from "../../models/response/PageResponse"
import { IAlertAction } from "./alert"

export type IDeviceTypes = 'pc' | 'tablete' | 'mobile'

export interface IPageState {
	loading: boolean
	pages: IPageResponse[]
	pagesNames: string[]
	homePageId: string
	activePage: IPageResponse
	devicePreview: IDeviceTypes
}

export enum pageActionTypes {
	PAGE_START = 'PAGE_START',
	PAGE_END = 'PAGE_END',
	PAGE_GET_PAGES = 'PAGE_GET_PAGES',
	PAGE_SAVE_NAMES = 'PAGE_SAVE_NAMES',
	PAGE_SET_HOME_PAGE = 'PAGE_SET_HOME_PAGE',
	PAGE_SET_ACTIVE_PAGE = 'PAGE_SET_ACTIVE_PAGE',
	PAGE_SHOW_DEVICE_PREVIEW = 'PAGE_SHOW_DEVICE_PREVIEW'
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

interface pageSetActivePage {
	type: pageActionTypes.PAGE_SET_ACTIVE_PAGE
	payload: IPageResponse
}

interface pageShowDevicePreview {
	type: pageActionTypes.PAGE_SHOW_DEVICE_PREVIEW
	payload: IDeviceTypes
}

export type IPageAction = IAlertAction | pageShowDevicePreview | pageStartAction | pageEndAction | pageGetPages | pageSaveNames | pageSetHomePage | pageSetActivePage