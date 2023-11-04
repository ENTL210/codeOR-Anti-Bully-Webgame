import React from "react";
import { BodyText, Container, ImageWrapper, Image, ListItem, SubTitle, Title, UnorderedList, ImageCaption } from "./pageStyle";
import HelpSupportPic from "../assets/help-and-support.jpg"
export default function GetHelpPage() {
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
            <Title>Get Help</Title>
            <ImageWrapper>
                <Image alt="" src={HelpSupportPic}/>
                <ImageCaption>Help & Support taken by <a href="https://unsplash.com/photos/round-life-buoy-MJAoiige14E">Matthew Warring</a> (Unsplash License)</ImageCaption>
            </ImageWrapper>
            <BodyText>
                Don't normalize being bullied. No one should 
                be bullied by another. If you are being bullied, or 
                you see your friend being bullied, please take action. 
                Don't wait before too late. 
            </BodyText>
            <SubTitle>Actions that you should take:</SubTitle>
            <UnorderedList>
                <ListItem>Talk to the person that you can trust (e.g. your parents, your older siblings, your school counselor, etc.)</ListItem>
                <ListItem>Report the bully to adults who stand on your side.</ListItem>
                <ListItem>If your friend is being bullied, do not ever abide to keep it a secret. Instead, motivating them to report to an adult that they trust the most.</ListItem>
            </UnorderedList>
        </Container>
    )
}