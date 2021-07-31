import {combineReducers} from 'redux'
import alertReducer from './alertReducer'
import authReducer from './authReducer'
import popupReducer from './popupReducer'
import projectsReducer from './projectsReducer'
import supportReducer from './supportReducer'
import userReducer from './userReducer'
import pageReducer from './pageReducer'

export const rootReducer = combineReducers({
	alert: alertReducer,
	auth: authReducer,
	support: supportReducer,
	projects: projectsReducer,
	user: userReducer,
	popup: popupReducer,
	page: pageReducer
})

// export type RootState = ReturnType<typeof rootReducer>