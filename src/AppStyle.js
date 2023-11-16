import { styled, createGlobalStyle } from "styled-components";
import {motion} from "framer-motion"


const Container = styled.div`
background: rgba(248, 141, 39, 0.8);
width: 100%;
overflow-x: hidden;
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
