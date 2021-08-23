import { IAlertMessage } from "../IAlertMessage";

export interface IPageResponse {
	id: string
	published: boolean
	isHomePage: boolean
	openInNewWindow: boolean
	updated: boolean
	isNewPage: boolean
	autosavePage: boolean
	name: string
	link: string
	project: string
	createdAt: Date
}

export interface ICreatePageResponse extends IAlertMessage {
	pages: IPageResponse[]
}

export interface IChangePageResponse extends IAlertMessage {
	pages: IPageResponse[]
}

export interface IDeletePageResponse extends IAlertMessage {
	pages: IPageResponse[]
}

export interface ICopyPageResponse extends IAlertMessage {
	pages: IPageResponse[]
}

export interface IMakePageHomeResponse extends IAlertMessage {
	pages: IPageResponse[]
}