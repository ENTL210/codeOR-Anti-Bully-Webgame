import React from "react";
import { Container } from "./pageStyle";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function Homepage() {
    const {UnitProvider} = useUnityContext({
        loaderUrl: "",
        dataUrl: "",
        frameworkUrl: "",
        codeUrl: "",
    })
    return (
        <Container
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
            ease: "easeInOut",
            duration: 0.2
        }}
        >
            {/* <Unity unityProvider={UnitProvider}/> */}
        </Container>
    )
}