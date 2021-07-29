import { IProjectsResponse } from "../../models/response/ProjectsResponse";
import { IAlertAction } from "./alert";

export interface IProjectsState {
	loading: boolean
	projectsList: IProjectsResponse[]
	projectsNames: string[]
}

export enum projectsActionTypes {
	PROJECTS_START = 'PROJECTS_START',
	PROJECTS_END = 'PROJECTS_END',
	PROJECTS_GET_ALL = 'PROJECTS_GET_ALL',
	PROJECTS_SAVE_NAMES = 'PROJECTS_SAVE_NAMES'
}

interface projectsStartAction {
	type: projectsActionTypes.PROJECTS_START
}

interface projectsEndAction {
	type: projectsActionTypes.PROJECTS_END
}

interface projectsGetAll {
	type: projectsActionTypes.PROJECTS_GET_ALL
	payload: IProjectsResponse[]
}

interface projectsSaveNames {
	type: projectsActionTypes.PROJECTS_SAVE_NAMES
	payload: string[]
}


export type IProjectsAction = IAlertAction | projectsStartAction | projectsEndAction | projectsGetAll | projectsSaveNames