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
        <Container>
            {/* <Unity unityProvider={UnitProvider}/> */}
        </Container>
    )
}