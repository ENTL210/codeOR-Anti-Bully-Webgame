import { styled, createGlobalStyle } from "styled-components";
import {motion} from "framer-motion"


const Container = styled.div`
width: 100%;
height: 100%;
background: #83C5BE;
`
const GlobalStyle = createGlobalStyle`
  body {
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,300;0,6..12,400;1,6..12,300;1,6..12,400&display=swap');
  font-family: 'Nunito Sans', sans-serif;
  }
`

export {
    Container,
    GlobalStyle,
}