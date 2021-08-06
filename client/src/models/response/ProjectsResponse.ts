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
	projects: IProjectsResponse[]
}

export interface IDeleteProjectResponse extends IAlertMessage {
	projects: IProjectsResponse[]
}

export interface IUpdateProjectsResponse extends IAlertMessage {
	projects: IProjectsResponse[]
}