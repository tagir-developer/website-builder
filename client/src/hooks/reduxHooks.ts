import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import type { RootState, AppDispatch } from '../App'
import ActionCreators from '../store/actionCreators'

// https://redux.js.org/recipes/usage-with-typescript
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>()

export const useActions = () => {
	const dispatch = useTypedDispatch()
	return bindActionCreators(ActionCreators, dispatch)
}