import { React, useState } from 'react'
import { Container, GlobalStyle } from "./AppStyle"
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu'

function App() {
  const [isTabActive, setIsActive] = useState(false)
  const [tab, setTab] = useState("")

  return (
    <Container>
      <GlobalStyle />
      <NavigationBar state={isTabActive} setState={() => { setIsActive(prevState => !prevState) }} />
      <Menu
        state={isTabActive}
        setState={() => { setIsActive(prevState => !prevState) }}
        currentTab={tab}
        setCurrentTab={(tab) => {setTab(tab)}}
      />
    </Container>
  )
}

export default App
