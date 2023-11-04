import React from "react";
import { Wrapper, MinimizeTab, Tab } from "./styles/MenuStyle"
import xMark from "../assets/x-mark.png"
import pageData from "../pageData";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate()

    const tabs = pageData.map(items => {
        return (
            <Tab
                key={items.id}
                initial={{ 
                    color: "#EDF6F9"
                }}
                animate={{
                    color: currentTab === items.path ? "#006D77" : "#EDF6F9"
                }}
                whileHover={{ color: "#006D77", borderRadius: 15 }}
                onClick={() => {
                    setCurrentTab(items.path)
                    navigate(items.path)
                    
                }}
            >
                {items.title}
            </Tab>
        )
    })

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

            {tabs}
        </Wrapper>
    )
}