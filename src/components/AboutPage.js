import React from "react";
import styled, {keyframes} from "styled-components"
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";


const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const float = keyframes`
    0%{ transform: translateY(-10px)}
    50%{ transform: translateY(15px) translateX(15px)}
    100%{ transform: translateY(-10px)}
`

const Spaceman = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 100%;
        height: auto;
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: "Ubuntu Mono", monospace;
    font-style: italic;
`



const AboutPage =()=> {
    
    return(
        <ThemeProvider theme={DarkTheme} >
            <Box>
                <LogoComponent theme="dark"/>
                <SocialIcons theme="dark"/>
                <PowerButton />
                <ParticleComponent theme="dark"/>

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    I'm a creative full stack and mobile applications developer with experience in a variety of exciting projects.
                    <br /> 
                    A level head and rational approach to problem solving combined with a passion for innovative and freash ideas has led to a portfolio of impressive website solutions.
                    <br />
                    A strong communicator with the ability to convey ideas clearly with an emphasis on client satisfaction.
                    <br />
                    Feel free to reach out to me through any of my social links.
                    
                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%"/>
                
            </Box>
        </ThemeProvider>
        
    )
}

export default AboutPage;