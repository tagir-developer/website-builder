import { IAlertMessage } from "../IAlertMessage";

export interface IPageResponse {
	id: string
	published: boolean
	isHomePage: boolean
	openInNewWindow: boolean
	updated: boolean
	name: string
	link: string
	project: string
	createdAt: Date
}

export interface ICreatePageResponse extends IAlertMessage {

}