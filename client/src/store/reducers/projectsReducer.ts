import { IProjectsResponse } from "../../models/response/ProjectsResponse"
import { IProjectsAction, IProjectsState, projectsActionTypes } from "../types/projects"

const initialState: IProjectsState = {
	loading: false,
	projectsList: [] as IProjectsResponse[],
	projectsNames: [],
	activeProject: {} as IProjectsResponse,
	shouldCreatePageAfterOpenProject: false
}

export default function projectsReducer(state = initialState, action: IProjectsAction): IProjectsState {
	switch(action.type) {
		case projectsActionTypes.PROJECTS_START: return {
			...state, 
			loading: true,
		}
		case projectsActionTypes.PROJECTS_END: return {
			...state, 
			loading: false,
		}
		case projectsActionTypes.PROJECTS_GET_ALL: return {
			...state,
			projectsList: action.payload,
			loading: false,
		}
		case projectsActionTypes.PROJECTS_SAVE_NAMES: return {
			...state,
			projectsNames: action.payload
		}
		case projectsActionTypes.PROJECTS_SET_ACTIVE_PROJECT: return {
			...state,
			activeProject: action.payload
		}
		case projectsActionTypes.PROJECTS_UPDATE_ACTIVE_PROJECT: return {
			...state,
			activeProject: action.payload,
			loading: false
		}
		case projectsActionTypes.PROJECTS_CLEAR_ACTIVE_PROJECT: return {
			...state,
			activeProject: {} as IProjectsResponse
		}
		case projectsActionTypes.PROJECTS_CREATE_PAGE_AFTER_OPEN_PROJECT: return {
			...state,
			shouldCreatePageAfterOpenProject: action.payload
		}
		default:
			return state
	}
}