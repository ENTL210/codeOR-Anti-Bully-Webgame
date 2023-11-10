import React, {useState, useEffect} from "react";
import { Container} from "./pageStyle";
import { Unity, useUnityContext } from "react-unity-webgl";


export default function Homepage() {
    const {unityProvider} =  useUnityContext({
        loaderUrl: "/game/game.loader.js",
        dataUrl: "/game/game.data",
        frameworkUrl: "/game/game.framework.js",
        codeUrl: "/game/game.wasm"
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
        style={{
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Unity 
            style={{width: 960, height: 600}} 
            unityProvider={unityProvider}
            devicePixelRatio={window.devicePixelRatio}
            />
        </Container>
    )
}