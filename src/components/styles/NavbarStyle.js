import styled from "styled-components";
import {motion} from "framer-motion";

const Wrapper = styled.div`
    width: 100%;
    background: #006D77;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `

    const Header = styled.h1`
    height: 100%;
    font-size: 1.5rem;
    font-weight: 800;
    color: #EDF6F9;
    padding: 10px;
    `

    const Tab = styled(motion.button)`
    background: none;
	color: inherit;
	border: none;
	padding: 10px;
	font: inherit;
	outline: inherit;
    img {
        width: 35px;
        cursor: pointer;
    }
    `

    

    export {
        Wrapper,
        Header,
        Tab,
    }