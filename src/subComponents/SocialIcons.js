import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Instagram, Github, Twitter, LinkedIn } from "../components/AllSvgs";


const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

    &>*::not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.div`
    width: 2px;
    height: 8rem;
    background-color: ${props => props.theme.text}
`;

const SocialIcons =()=>{
    return(
        <Icons>
            <div>
                <NavLink style={{color: "inherit"}} target="_blank" to={{pathname: "https://github.com/Benedict-Kpaduwa"}}>
                    <Github width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} target="_blank" to={{}}>
                    <Twitter width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} target="_blank" to={{pathname: "https://www.instagram.com/benedict__k/?hl=en"}}>
                    <Instagram width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>
            <div>
                <NavLink style={{color: "inherit"}} target="_blank" to={{pathname: "https://www.linkedin.com/in/benedict-kpaduwa-c-7a6010164/"}}>
                    <LinkedIn width={25} height={25} fill="currentColor" />
                </NavLink>
            </div>

            <Line />
        </Icons>
    )
}

export default SocialIcons