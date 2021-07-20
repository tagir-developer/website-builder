import { AxiosResponse } from "axios"
import $api from "../http"
import { ICreateProjectsResponse, IProjectsResponse } from "../models/response/ProjectsResponse"


export default class ProjectsService {

	static async getProjects(): Promise<AxiosResponse<IProjectsResponse[]>> {
		return $api.get<IProjectsResponse[]>('projects/projects')
	}

	static async createProject(name: string, link: string): Promise<AxiosResponse<ICreateProjectsResponse>> {
		return $api.post<ICreateProjectsResponse>('projects/create-new-project', {name, link})
	}


}