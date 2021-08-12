import { IAlertMessage } from "../IAlertMessage"

export interface IProjectsResponse {
	id: string
	name: string
	link: string
	isPublished: boolean
	hasPages: boolean
	updated: boolean
	scripts: string
	fontConfigs: {
		// switchedOn: boolean
		fontFamily: string
		text: {
			fontSize: string
		}
		title: {
			fontSize: string
			fontWeight: string
		}
	}
	formProcessing: {
		email: string
		secondaryEmail: string
		letterSubject: string
		phoneNumber: string
	}
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

export interface IAddProjectScriptsResponse extends IAlertMessage {
	project: IProjectsResponse
}

export interface ISetFontConfigsResponse extends IAlertMessage {
	project: IProjectsResponse
}

export interface IFormProcessingResponse extends IAlertMessage {
	project: IProjectsResponse
}