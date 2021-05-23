import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/HOC/Layout/Layout'
import { useRoutes } from './routes'
import ScrollToTop from './utils/ScrollToTop/ScrollToTop'

const App: React.FC = () => {

  const routes = useRoutes(true)

  // ! Если в глобальном стейте открыт попап или алерт, то не рендерить компонент <ScrollToTop />, чтобы не сбивать скролл

  return (
    <Layout>
      <Router>
        <ScrollToTop />
        {routes}
      </Router>
    </Layout>
  )
}

export default App
