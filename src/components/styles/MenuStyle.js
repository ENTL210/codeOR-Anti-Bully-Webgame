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

const expandHeight = keyframes`
0% {
    height: 100vh
}
100% {
    height: 100%;
}
`

const Wrapper = styled(motion.div)`
position: absolute;
right: 0;
top: 0;
min-height: 100%;
background: #15616D;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
gap: 10px;
width: 50%;
z-index: 10;
@media only screen and (max-width: 750px) {
    width: 100%;
    animation: ${expandAnimation} 0.5s linear
}
@media only screen and (min-width: 100vh) {

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
color: #FFFFFF;
`


export {
    Wrapper,
    MinimizeTab,
    Tab
}