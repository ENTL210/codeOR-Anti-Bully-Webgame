import { motion } from "framer-motion";
import {styled, keyframes} from "styled-components";

const expandAnimation = keyframes`
0% {
    width: 50%;
}
100% {
    width: 100%;
}
`

const Wrapper = styled(motion.div)`
position: absolute;
right:0;
top: 0;
height: 100vh;
background: #e38764;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap: 10px;
width: 50%;
@media only screen and (max-width: 750px) {
    width: 100%;
    animation: ${expandAnimation} 0.5s linear
}
`

const MinimizeTab = styled(motion.button)`
position: absolute;
right: 0;
top: 0;
background: none;
color: inherit;
border: none;
padding: 10px;
font: inherit;
cursor: pointer;
outline: inherit;
img {
    width: 50px;
}
`

const Tab = styled(motion.button)`
background: none;
color: inherit;
border: none; 
padding: 10px;
font: inherit;
cursor: pointer;
outline: inherit;
font-size: 1.5rem;
font-weight: 800;
color: #EDF6F9;
`


export {
    Wrapper,
    MinimizeTab,
    Tab
}