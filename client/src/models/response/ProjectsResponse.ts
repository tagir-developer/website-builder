import { IAlertMessage } from "../IAlertMessage";

export interface IProjectsResponse {
	id: string
	name: string
	link: string
	isPublished: boolean
	hasPages: boolean
	updated: boolean
}

export interface ICreateProjectsResponse extends IAlertMessage {

}

export interface IUpdateProjectsResponse extends IAlertMessage {
	project: IProjectsResponse
}