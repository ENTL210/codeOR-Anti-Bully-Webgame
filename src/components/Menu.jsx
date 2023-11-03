import React from "react";
import {Wrapper, Tab} from "./styles/MenuStyle"
import hamburgerIcon from "../assets/hamburger-icon.png"

export default function Menu({ state, setState }) {
    const hamburgerAnimation = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: "100%"
        },
    }

    return (
        <Wrapper
            initial={{ opacity: 0 }}
            animate={state ? "open" : "closed"}
            transition={{ type: "tween", ease: "easeInOut" }}
            variants={hamburgerAnimation}
        >
            <Tab>
                <img src={hamburgerIcon} onClick={() => {
                    setState()
                }} />
            </Tab>
        </Wrapper>
    )
}