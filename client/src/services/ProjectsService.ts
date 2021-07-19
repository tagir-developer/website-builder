import { AxiosResponse } from "axios"
import $api from "../http"
import { IProjectsResponse } from "../models/response/ProjectsResponse"


export default class ProjectsService {

	static async getProjects(): Promise<AxiosResponse<IProjectsResponse[]>> {
		return $api.get<IProjectsResponse[]>('projects/projects')
	}

	// static async complaint(email: string, message: string): Promise<AxiosResponse<IProjectsResponse>> {
	// 	return $api.post<ISupportResponse>('support/complaint', {email, message})
	// }
}