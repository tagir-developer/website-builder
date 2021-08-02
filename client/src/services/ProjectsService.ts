import { AxiosResponse } from "axios"
import $api from "../http"
import { IAlertMessage } from "../models/IAlertMessage"
import { ICreateProjectsResponse, IProjectsResponse, IUpdateProjectsResponse } from "../models/response/ProjectsResponse"


export default class ProjectsService {

	static async getProjects(): Promise<AxiosResponse<IProjectsResponse[]>> {
		return $api.get<IProjectsResponse[]>('projects/projects')
	}

	static async createProject(name: string, link: string): Promise<AxiosResponse<ICreateProjectsResponse>> {
		return $api.post<ICreateProjectsResponse>('projects/create-new-project', {name, link})
	}

	static async changeProject(projectId: string, name: string, link: string): Promise<AxiosResponse<IUpdateProjectsResponse>> {
		return $api.put<IUpdateProjectsResponse>('projects/change-project', {projectId, name, link})
	}

	static async deleteProject(projectId: string): Promise<AxiosResponse<IAlertMessage>> {
		return $api.delete<IAlertMessage>(`projects/delete-project/${projectId}`)
	}


}