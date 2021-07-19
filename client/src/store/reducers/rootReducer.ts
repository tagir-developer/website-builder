import {combineReducers} from 'redux'
import alertReducer from './alertReducer'
import authReducer from './authReducer'
import projectsReducer from './projectsReducer'
import supportReducer from './supportReducer'

export const rootReducer = combineReducers({
	alert: alertReducer,
	auth: authReducer,
	support: supportReducer,
	projects: projectsReducer
})

// export type RootState = ReturnType<typeof rootReducer>