import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TopMenu from './components/Navigation/topMenu/TopMenu/TopMenu'
import { useRoutes } from './routes'

const App: React.FC = () => {

  const routes = useRoutes(false)
  
  return (
    <Router>
      {routes}
    </Router>
  )
}

export default App
