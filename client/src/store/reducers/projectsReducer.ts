import { IProjectsResponse } from "../../models/response/ProjectsResponse"
import { IProjectsAction, IProjectsState, projectsActionTypes } from "../types/projects"

const initialState: IProjectsState = {
	loading: false,
	projectsList: [] as IProjectsResponse[]
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
		default:
			return state
	}
}