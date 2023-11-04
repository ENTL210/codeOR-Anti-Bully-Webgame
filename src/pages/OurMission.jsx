import React from "react";
import { BodyText, Container, ImageWrapper, Image, Title, ImageCaption } from "./pageStyle";
import missionPic from "../assets/mission.jpg"

export default function OurMissionpPage() {
    return (
        <Container
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
        }}
        transition={{
            ease:"easeInOut",
            duration: 0.2
        }}
        >
            <Title>Our Mission</Title>
            <ImageWrapper>
                <Image alt="" src={missionPic}/>
                <ImageCaption>A Scrabble Type Blocks Spelling the Word Mission taken by <a href="https://unsplash.com/photos/a-scrabble-type-block-spelling-the-word-miss-sits-next-to-a-bouquet-eVhVt7YcMfM">Alex Shute</a> (Unsplash License)</ImageCaption>
            </ImageWrapper>
            <BodyText>
                The Journey of Empathy is a simple web-based Unity game 
                that was built for elementary school students to prevent and 
                stop bullying. As a result, the game was built to be accessible,
                attractive, and enjoyable for all kids from different ages and backgrounds.
            </BodyText>

        </Container>
    )
}