import React, { Profiler, ProfilerOnRenderCallback } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/HOC/Layout/Layout'
import { Routes } from './routes'
import ScrollToTop from './utils/ScrollToTop/ScrollToTop'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import hardSet from 'redux-persist/es/stateReconciler/hardSet'

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

const persistConfig = {
  key: 'root',
  storage,
  // stateReconciler: autoMergeLevel2
  // stateReconciler: hardSet
  // whitelist: ['support']
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)
const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


const App: React.FC = () => {

  // const profilerCallback: ProfilerOnRenderCallback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  //   console.log(`${id} - ${phase} phase:`)
  //   console.log(`Actual time: ${actualTime}`) // Время, затраченное на рендеринг зафиксированного обновления.
  //   console.log(`Base time: ${baseTime}`) // Предполагаемое время рендеринга всего поддерева без кеширования.
  //   console.log(`Start time: ${startTime}`) // Время, когда React начал рендерить это обновление.
  //   console.log(`Commit time: ${commitTime}`) // Время, когда когда React зафиксировал это обновление.
  // }

  return (
    // <Profiler id="APP PROFILER" onRender={profilerCallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Router>
              <ScrollToTop />
              <Routes />
            </Router>
          </Layout>
        </PersistGate>
      </Provider>
    // </Profiler>
  )
}

export default App
