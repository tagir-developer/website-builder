import { IAlert } from "../Ialert"


export interface IProjectsResponse {
	id: string
	name: string
	link: string
	isPublished: boolean
	hasPages: boolean
}

export interface ICreateProjectsResponse extends IAlert {

}