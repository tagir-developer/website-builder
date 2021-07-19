import * as authActionCreators from './auth'
import * as supportActionCreators from './support'
import * as alertActionCreators from './alert'
import * as projectsActionCreators from './projects'

const allActionCreators = {
	...authActionCreators,
	...supportActionCreators,
	...alertActionCreators,
	...projectsActionCreators
}

export default allActionCreators

// export default {
// 	...authActionCreators,
// 	...supportActionCreators,
// 	...alertActionCreators,
// 	...projectsActionCreators
// }