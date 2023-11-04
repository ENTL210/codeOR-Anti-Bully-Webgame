import { React, useState } from 'react'
import { Container, GlobalStyle } from "./AppStyle"
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu'
import { Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Home'
import OurMissionpPage from './pages/OurMission'
import GetHelpPage from './pages/GetHelp'
import LearMorePage from './pages/LearnMore'

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
        setCurrentTab={(tab) => { setTab(tab) }}
      />
      <Routes>
        <Route path="*" element={<Navigate to={"/home"} replace/>}/>
        <Route path="/home" element={<Homepage/>}/>
        <Route path="/our-mission" element={<OurMissionpPage/>}/>
        <Route path="/get-help" element={<GetHelpPage/>}/>
        <Route path="/learn-more" element={<LearMorePage/>}/>
      </Routes>
    </Container>
  )
}

export default App
