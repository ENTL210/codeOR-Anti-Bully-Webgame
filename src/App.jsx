import { React, useState } from 'react'
import { Container, GlobalStyle} from "./AppStyle"
import NavigationBar from './components/NavigationBar'
import Menu from './components/Menu'


function App() {
  const [isTabActive, setIsActive] = useState(false)
  
  return (
    <Container>
      <GlobalStyle />
      <NavigationBar state={isTabActive} setState={() => { setIsActive(prevState => !prevState) }} />
      <Menu state={isTabActive} setState={() => {setIsActive(prevState => !prevState)}}/>
    </Container>
  )
}

export default App
