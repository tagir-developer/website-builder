import { ISupportAction, ISupportState, supportActionTypes } from "../types/support"

const initialState: ISupportState = {
	loading: false,
}

export default function supportReducer(state = initialState, action: ISupportAction): ISupportState {
	switch(action.type) {
		case supportActionTypes.SUPPORT_START: return {
			...state, 
			loading: true,
		}
		case supportActionTypes.SUPPORT_END: return {
			...state, 
			loading: false,
		}
		default:
			return state
	}
}