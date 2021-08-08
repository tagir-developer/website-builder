import { IProjectsResponse } from "../../models/response/ProjectsResponse"
import { IAlertAction } from "./alert";

export interface IProjectsState {
	loading: boolean
	projectsList: IProjectsResponse[]
	projectsNames: string[]
	activeProject: IProjectsResponse
	shouldCreatePageAfterOpenProject: boolean
}

export enum projectsActionTypes {
	PROJECTS_START = 'PROJECTS_START',
	PROJECTS_END = 'PROJECTS_END',
	PROJECTS_GET_ALL = 'PROJECTS_GET_ALL',
	PROJECTS_SAVE_NAMES = 'PROJECTS_SAVE_NAMES',
	PROJECTS_SET_ACTIVE_PROJECT = 'PROJECTS_SET_ACTIVE_PROJECT',
	PROJECTS_CLEAR_ACTIVE_PROJECT = 'PROJECTS_CLEAR_ACTIVE_PROJECT',
	PROJECTS_UPDATE_ACTIVE_PROJECT = 'PROJECTS_UPDATE_ACTIVE_PROJECT',
	PROJECTS_CREATE_PAGE_AFTER_OPEN_PROJECT = 'PROJECTS_CREATE_PAGE_AFTER_OPEN_PROJECT'
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

interface setActiveProject {
	type: projectsActionTypes.PROJECTS_SET_ACTIVE_PROJECT
	payload: IProjectsResponse
}

interface updateActiveProject {
	type: projectsActionTypes.PROJECTS_UPDATE_ACTIVE_PROJECT
	payload: IProjectsResponse
}

interface clearActiveProject {
	type: projectsActionTypes.PROJECTS_CLEAR_ACTIVE_PROJECT
}

interface createPageAfterOpenProject {
	type: projectsActionTypes.PROJECTS_CREATE_PAGE_AFTER_OPEN_PROJECT
	payload: boolean
}

interface projectsSaveNames {
	type: projectsActionTypes.PROJECTS_SAVE_NAMES
	payload: string[]
}


export type IProjectsAction = IAlertAction | projectsStartAction | projectsEndAction | projectsGetAll | projectsSaveNames | setActiveProject | clearActiveProject | updateActiveProject | createPageAfterOpenProject