import { AxiosError } from "axios"
import { Dispatch } from "redux"
import { IProjectsResponse } from "../../models/response/ProjectsResponse"
import ProjectsService from "../../services/ProjectsService"
import { IProjectsAction, projectsActionTypes } from "../types/projects"
import { alertErrorOrMessageCreator } from "./alert"

export const getAllProjects = () => {
	return async (dispatch: Dispatch<IProjectsAction>) => {

		dispatch(projectsStartCreator())

		try {
			const response = await ProjectsService.getProjects()

			
			dispatch(projectsGetAll(response.data))
			dispatch(saveProjectsNames(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(projectsEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const createNewProject = (name: string, link: string) => {
	return async (dispatch: Dispatch<IProjectsAction>) => {

		dispatch(projectsStartCreator())

		try {
			const response = await ProjectsService.createProject(name, link)

			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(projectsEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const changeProject = (projectId: string, name: string, link: string) => {
	return async (dispatch: Dispatch<IProjectsAction>) => {

		dispatch(projectsStartCreator())

		try {
			const response = await ProjectsService.changeProject(projectId, name, link)

			dispatch(updateActiveProject(response.data.project))
			dispatch(alertErrorOrMessageCreator(response.data))

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(projectsEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const deleteProject = (projectId: string) => {
	return async (dispatch: Dispatch<IProjectsAction>) => {

		dispatch(projectsStartCreator())

		try {
			const response = await ProjectsService.deleteProject(projectId)

			dispatch(alertErrorOrMessageCreator(response.data))
			dispatch(projectsEndCreator())

		} catch (error) {
			const e = error as AxiosError
			if (e.response) {
				dispatch(projectsEndCreator())
				dispatch(alertErrorOrMessageCreator(e.response.data))
			}

		}
	}
}

export const projectsGetAll = (payload: any): IProjectsAction => {
	return { 
		type: projectsActionTypes.PROJECTS_GET_ALL,
		payload
	}
}

export const saveProjectsNames = (projects: IProjectsResponse[]): IProjectsAction => {

	const projectsNames: string[] = projects.map(i => '/' + i.link)

	return { 
		type: projectsActionTypes.PROJECTS_SAVE_NAMES,
		payload: projectsNames
	}
}

export const updateActiveProject = (payload: IProjectsResponse): IProjectsAction => {
	return { 
		type: projectsActionTypes.PROJECTS_UPDATE_ACTIVE_PROJECT,
		payload: payload
	}
}

export const setActiveProject = (projects: IProjectsResponse[], projectUrl: string): IProjectsAction => {

	const activeProject: IProjectsResponse = projects.filter(i => i.link === projectUrl)[0]

	return { 
		type: projectsActionTypes.PROJECTS_SET_ACTIVE_PROJECT,
		payload: activeProject
	}
}

export const projectsStartCreator = (): IProjectsAction => {
	return { type: projectsActionTypes.PROJECTS_START }
}

export const clearActiveProject = (): IProjectsAction => {
	return { type: projectsActionTypes.PROJECTS_CLEAR_ACTIVE_PROJECT }
}

export const projectsEndCreator = (): IProjectsAction => {
	return { type: projectsActionTypes.PROJECTS_END }
}

export const createPageAfterOpenProject = (payload: boolean): IProjectsAction => {
	return { 
		type: projectsActionTypes.PROJECTS_CREATE_PAGE_AFTER_OPEN_PROJECT,
		payload
	}
}


