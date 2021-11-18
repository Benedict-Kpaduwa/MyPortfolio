import React from "react";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import { Container } from "tsparticles";

const MainContainer = styled.div`
    background: $(props => props.theme.text);
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    position: relative;

    h2,h3,h4,h5,h6{
        font-family: "Karla" , sans-serif;
        font-weight: 500;
    }
`

const MyContainer = styled.div`
    padding: 2rem;
`

const Main =()=> {
    return(
        <MainContainer>
            <MyContainer>
                <PowerButton />
            </MyContainer>
        </MainContainer>
    )
}

export default Main;