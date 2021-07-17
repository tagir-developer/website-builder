import * as authActionCreators from './auth'
import * as supportActionCreators from './support'
import * as alertActionCreators from './alert'

export default {
	...authActionCreators,
	...supportActionCreators,
	...alertActionCreators
}