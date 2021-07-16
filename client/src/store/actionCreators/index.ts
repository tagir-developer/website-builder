import * as authActionCreators from './auth'
import * as supportActionCreators from './support'

export default {
	...authActionCreators,
	...supportActionCreators
}