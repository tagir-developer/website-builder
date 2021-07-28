import * as authActionCreators from './auth'
import * as supportActionCreators from './support'
import * as alertActionCreators from './alert'
import * as projectsActionCreators from './projects'
import * as userActionCreators from './user'
import * as popupActionCreators from './popup'

const allActionCreators = {
	...authActionCreators,
	...supportActionCreators,
	...alertActionCreators,
	...projectsActionCreators,
	...userActionCreators,
	...popupActionCreators
}

export default allActionCreators