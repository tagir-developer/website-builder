import React from 'react'
import TopMenu from './components/Navigation/topMenu/TopMenu/TopMenu'
import Content from './components/UI/Content/Content'
import Footer from './components/UI/Footer/Footer'

const App: React.FC = () => {
  return (
  <React.Fragment>
    <TopMenu />
    <h1>Hellow world</h1>
    <Content />
    <Footer />
  </React.Fragment>
  )
}

export default App
