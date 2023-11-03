import React from "react";
import {Wrapper, Header, Tab} from "./styles/NavbarStyle";
import hamburgerIcon from "../assets/hamburger-icon.png"

export default function NavigationBar({state, setState}) {
    return (
        <Wrapper>
            <Header>The Journey of Empathy</Header>
            <Tab>
                <img src={hamburgerIcon} onClick={() => {
                    setState()
                }}/>
            </Tab>
        </Wrapper>
    )
}

