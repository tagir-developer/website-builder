import * as authActionCreators from './auth'
import * as supportActionCreators from './support'
import * as alertActionCreators from './alert'
import * as projectsActionCreators from './projects'
import * as userActionCreators from './user'

const allActionCreators = {
	...authActionCreators,
	...supportActionCreators,
	...alertActionCreators,
	...projectsActionCreators,
	...userActionCreators
}

export default allActionCreators