import { AxiosError } from "axios"
import { Dispatch } from "redux"
import ProjectsService from "../../services/ProjectsService"
import SupportService from "../../services/SupportService"
import { IProjectsAction, projectsActionTypes } from "../types/projects"
import { alertErrorOrMessageCreator } from "./alert"

export const getAllProjects = () => {
	return async (dispatch: Dispatch<IProjectsAction>) => {

		dispatch(projectsStartCreator())

		try {

			// const response = await SupportService.question(formData)
			const response = await ProjectsService.getProjects()

			dispatch(projectsGetAll(response.data))

			// dispatch(alertErrorOrMessageCreator(response.data))

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

export const projectsStartCreator = (): IProjectsAction => {
	return { type: projectsActionTypes.PROJECTS_START }
}

export const projectsEndCreator = (): IProjectsAction => {
	return { type: projectsActionTypes.PROJECTS_END }
}
