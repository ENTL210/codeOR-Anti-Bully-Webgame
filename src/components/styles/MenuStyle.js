import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
position: absolute;
right:0;
top: 0;
min-width: 40vw;
height: 100vh;
background: #e38764;
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 5px
`

const Tab = styled(motion.button)`
background: none;
color: inherit;
border: none;
padding: 10px;
font: inherit;
cursor: pointer;
outline: inherit;
img {
    width: 35px;
}
`


export {
    Wrapper,
    Tab
}