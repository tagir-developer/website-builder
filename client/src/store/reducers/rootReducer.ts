import {combineReducers} from 'redux'
import authReducer from './authReducer'
import supportReducer from './supportReducer'

export const rootReducer = combineReducers({
	auth: authReducer,
	support: supportReducer
})

// export type RootState = ReturnType<typeof rootReducer>