import React from "react";
import { BodyText, Container, Image, ImageCaption, ImageWrapper, ListItem, SubTitle, Title, UnorderedList } from "./pageStyle";
import oneAgainAll from "../assets/one-against-all.jpg"

export default function LearMorePage() {
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
            <Title>More About Bullying</Title>
            <ImageWrapper>
                <Image alt="" src={oneAgainAll} />
                <ImageCaption>One Against All taken by <a href="https://pixabay.com/photos/one-against-all-all-against-one-1744091/">Alexas Fotos</a> (CC License)</ImageCaption>
            </ImageWrapper>

            <SubTitle>What is bullying?</SubTitle>
            <BodyText>
                Bullying is an ongoing misuse of power in a relationship. 
                Bullying can be in different forms, and there are the three 
                most famous kinds of bullying, physical, verbal, and cyberbullying.
            </BodyText>

            <SubTitle>What are some signs of you are being bullied?</SubTitle>
            <BodyText>
                Below are some of the signs that you should be aware of. 
                If you or your friend has some of the signs. Please get help immediately. 
            </BodyText>
            <UnorderedList>
                <ListItem>Bruises and scratches are all over you</ListItem>
                <ListItem>Wish to stay at home</ListItem>
                <ListItem>Frighten all the times</ListItem>
                <ListItem>Becoming aggressive</ListItem>
                <ListItem>Less social with people around</ListItem>
            </UnorderedList>
            <SubTitle>How to get involved in stopping bullying?</SubTitle>
            <BodyText>
            Izzy Kalman once said, "We will never win the war against bullying by trying 
            to convince people to stop being bullies. We need to teach people how not to be
            victims!" Therefore, the best way to get involved is to teach your friends and siblings 
            the signs of being bullies and what to do when they are being bullied.
            </BodyText>
        </Container>
    )
}