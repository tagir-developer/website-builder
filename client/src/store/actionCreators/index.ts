import * as authActionCreators from './auth'
import * as supportActionCreators from './support'
import * as alertActionCreators from './alert'
import * as projectsActionCreators from './projects'
import * as userActionCreators from './user'
import * as popupActionCreators from './popup'
import * as pageActionCreators from './page'
import * as templateActionCreators from './template'

const allActionCreators = {
	...authActionCreators,
	...supportActionCreators,
	...alertActionCreators,
	...projectsActionCreators,
	...userActionCreators,
	...popupActionCreators,
	...pageActionCreators,
	...templateActionCreators
}

export default allActionCreators