import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/HOC/Layout/Layout'
import { useRoutes } from './routes'

const App: React.FC = () => {

  const routes = useRoutes(false)

  return (
    <Layout>
      <Router>
        {routes}
      </Router>
    </Layout>
  )
}

export default App
