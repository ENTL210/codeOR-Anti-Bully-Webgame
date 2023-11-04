import React from "react";
import { useNavigate } from "react-router-dom";
import {Wrapper, Header, Tab} from "./styles/NavbarStyle";
import hamburgerIcon from "../assets/hamburger-icon.png"

export default function NavigationBar({state, setState}) {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Header
                onClick={() => {
                    navigate("/home")
                }}
            >
                The Journey of Empathy
            </Header>
            <Tab>
                <img src={hamburgerIcon} onClick={() => {
                    setState()
                }}/>
            </Tab>
        </Wrapper>
    )
}

