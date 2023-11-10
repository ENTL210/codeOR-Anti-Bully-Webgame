import styled from "styled-components";
import {motion} from "framer-motion"
import { Unity } from "react-unity-webgl";

const Container = styled(motion.div)`
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
color: #001524;
overflow: scroll;

`

const Title = styled.h1`
font-size: clamp(1rem, 10vw, 3rem);
`

const SubTitle = styled.h2`
font-size: clamp(0.5rem, 6vw, 2.2rem);
line-height: 0;
`

const ImageWrapper = styled.figure`
margin: 0;
padding: 5px;
width: 50%;
display: flex;
flex-direction: column;
`

const Image = styled.img`
max-width: 100%;
border-radius: 5px;
`

const ImageCaption = styled.figcaption`
font-size: 2.2vw;
a {
    color: #001524;
    font-weight: 800;
}
a:hover {
    color: #FFECD1;
    transition: color 0.2s;
}
`

const BodyText = styled.p`
font-size: clamp(1.5rem, 4vw, 2.2rem);
line-height: 1.2;
min-width: 15ch;
max-width: 70ch;
font-weight: 500;

`

const UnorderedList = styled.ul`

`

const ListItem = styled.li`
font-size: clamp(1.5rem, 4vw, 2.2rem);
line-height: 1.3;
min-width: 15ch;
max-width: 70ch;
font-weight: 500;
`

export {
    Container,
    Title,
    SubTitle,
    BodyText,
    ImageWrapper,
    Image,
    ImageCaption,
    UnorderedList,
    ListItem,
}