import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/HOC/Layout/Layout'
import { useRoutes } from './routes'
import ScrollToTop from './utils/ScrollToTop/ScrollToTop'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './store/reducers/rootReducer'
import thunk from 'redux-thunk'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any
  }
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


const App: React.FC = () => {

  const routes = useRoutes(false)

  // ! Если в глобальном стейте открыт попап или алерт, то не рендерить компонент <ScrollToTop />, чтобы не сбивать скролл

  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <ScrollToTop />
          {routes}
        </Router>
      </Layout>
    </Provider>
  )
}

export default App
