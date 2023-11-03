import React from "react";
import { Wrapper, MinimizeTab, Tab } from "./styles/MenuStyle"
import xMark from "../assets/x-mark.png"

export default function Menu({ state, setState, currentTab, setCurrentTab }) {
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
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            variants={hamburgerAnimation}
        >
            <MinimizeTab>
                <img src={xMark} onClick={() => {
                    setState()
                }} />
            </MinimizeTab>

            <Tab 
                initial={{ background: "none" }} 
                whileHover={{ background: "#e0a08b", borderRadius: 10 }}
            >
                Home
            </Tab>
            <Tab
                initial={{ background: "none" }} 
                whileHover={{ background: "#e0a08b", borderRadius: 10 }}
            >
                Our Mission
            </Tab>
            <Tab
                initial={{ background: "none" }} 
                whileHover={{ background: "#e0a08b", borderRadius: 10 }}
            >
                Get Help
            </Tab>
            <Tab
                initial={{ background: "none" }} 
                whileHover={{ background: "#e0a08b", borderRadius: 10 }}
            >
                Learn More
            </Tab>
        </Wrapper>
    )
}