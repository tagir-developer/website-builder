import {combineReducers} from 'redux'
import alertReducer from './alertReducer'
import authReducer from './authReducer'
import popupReducer from './popupReducer'
import projectsReducer from './projectsReducer'
import supportReducer from './supportReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
	alert: alertReducer,
	auth: authReducer,
	support: supportReducer,
	projects: projectsReducer,
	user: userReducer,
	popup: popupReducer
})

// export type RootState = ReturnType<typeof rootReducer>