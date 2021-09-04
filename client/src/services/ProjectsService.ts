import { AxiosResponse } from "axios"
import $api from "../http"
import { IAddProjectScriptsResponse, IChangeProjectStatusResponse, ICreateProjectsResponse, IDeleteProjectResponse, IFormProcessingResponse, IProjectsResponse, ISetFontConfigsResponse, IUpdateProjectsResponse } from "../models/response/ProjectsResponse"


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

	static async addScripts(projectId: string, scripts: string): Promise<AxiosResponse<IAddProjectScriptsResponse>> {
		return $api.put<IAddProjectScriptsResponse>('projects/add-scripts', {projectId, scripts})
	}

	static async changeProjectStatus(projectId: string, propsArr: string): Promise<AxiosResponse<IChangeProjectStatusResponse>> {
		return $api.put<IChangeProjectStatusResponse>('projects/change-status', {projectId, propsArr})
	}

	static async setFontConfigs(projectId: string, fontFamily: string, titleSize: string, titleWeight: string, textSize: string): Promise<AxiosResponse<ISetFontConfigsResponse>> {
		return $api.put<ISetFontConfigsResponse>('projects/set-font-configs', {projectId, fontFamily, titleSize, titleWeight, textSize})
	}

	static async formProcessing(projectId: string, email: string, letterSubject: string, phoneNumber: string = '', secondaryEmail: string = ''): Promise<AxiosResponse<IFormProcessingResponse>> {
		return $api.put<IFormProcessingResponse>('projects/form-processing', {projectId, email, secondaryEmail, letterSubject, phoneNumber})
	}

	static async deleteProject(projectId: string): Promise<AxiosResponse<IDeleteProjectResponse>> {
		return $api.delete<IDeleteProjectResponse>(`projects/delete-project/${projectId}`)
	}


}