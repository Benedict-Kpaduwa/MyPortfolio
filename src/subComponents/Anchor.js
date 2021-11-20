import React from "react";
import { useRef, useEffect } from "react";
//import {NavLink} from "react-router-dom";
import { Anchor, Link } from "../components/AllSvgs";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
`

const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }
`

const ProDisplay = styled.div`
    position: absolute;
    top: 0;
    right: 2rem;

`



const AnchorComponent = (props) => {

    const ref = useRef(null);
    const hiddenRef = useRef(null);


    useEffect(() => {

        const handleScroll = () => {
            let scrollPosition = window.scrollY;  // Had to change it from pageYOffset to scrollY because it kept on returnin undefined
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;

            let diff = Math.max(bodyHeight - (scrollPosition + windowSize))

            let diffP = (diff*100)/(bodyHeight-windowSize);
            //console.log(scrollPosition)

            ref.current.style.transform = `translateY(${-diffP}%)`;

            if(window.scrollY > 5){
                hiddenRef.current.style.display = "none";
            }else{
                hiddenRef.current.style.display = "block";
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <Container>
            <ProDisplay ref={hiddenRef} className="hidden"> </ProDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.numbers)].map((x,id) => {
                        return <Link key={id} width={25} height={25} fill="currentColor" className="chain" />
                    })
                }
                <Anchor width={70} height={70} fill="currentColor" />
            </Slider>
        </Container>
    )
}

export default AnchorComponent;