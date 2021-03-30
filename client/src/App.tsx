import React from 'react'
import TopMenu from './components/Navigation/topMenu/TopMenu/TopMenu'
import Content from './components/UI/Content/Content'
import Footer from './components/UI/Footer/Footer'

const App: React.FC = () => {
  return (
  <React.Fragment>
    <TopMenu />
    <Content />
    <Footer />
  </React.Fragment>
  )
}

export default App
