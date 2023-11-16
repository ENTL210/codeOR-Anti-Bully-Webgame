import React, { useState, useEffect } from "react";
import { Container, LoaderWrapper, Loader, GameCanvas, Game, FullscreenBtn } from "./pageStyle";
import { Unity, useUnityContext } from "react-unity-webgl";
import FullScreenIcon from "../assets/full-screen-icon.png";


export default function Homepage() {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
    loaderUrl: "/game/game.loader.js",
    dataUrl: "/game/game.data",
    frameworkUrl: "/game/game.framework.js",
    codeUrl: "/game/game.wasm",
  })

  const [windowPixelRatio, setWindowPixelRatio] = useState(window.devicePixelRatio)

  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );


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
        alignItems: "center",
        justifyContent: "center",
        overflowY: "hidden",
      }}
    >

      {isLoaded === false && (
        <LoaderWrapper>
          <Loader
            initial={{
              width: 0
            }}
            animate={{
              width: `${loadingProgression * 100}%`
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >

          </Loader>
        </LoaderWrapper>
      )}

      <GameCanvas
        initial={{
          display: "none"
        }}
        animate={{
          display: isLoaded ? "flex" : "none"
        }}
      >
        <Game 
        unityProvider={unityProvider}
        devicePixelRatio={window.devicePixelRatio}
        />

        <FullscreenBtn
        onClick={() => {
          requestFullscreen(true)
        }}
        >
          <img src={FullScreenIcon}/>
        </FullscreenBtn>
      </GameCanvas>
    </Container>
  )
}
