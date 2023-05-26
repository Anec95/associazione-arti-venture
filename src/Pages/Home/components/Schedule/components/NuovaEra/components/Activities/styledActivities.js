import Carousel from "react-multi-carousel";
import { styled } from "styled-components";


export const ActivitiesDiv = styled.div`
    ${
        props => props.expanded ? 
        {
            zIndex: 8,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "var(--ice)",
            width: "80vw",
            height: "80vh"
        }:
        {
            width: "100%",
            position: "relative"
        }
    }
    transition: 1s;

    @media (max-width: 500px) {
        ${props => props.expanded ? {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)"            
            }: {
            }
        }
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    } 
`

export const CarouselTitle = styled.h2`
    font-size: ${props => props.expanded ? "40px" : "28px"};
    margin: ${props => props.expanded ? "50px 0 20px 10px" : "50px 0 10px 10px"};
    cursor: pointer;

    @media (max-width: 500px) {
        font-size: ${props => props.expanded ? "30px" : "20px"};
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }    
`

export const ActivitiesQuotes = styled.h6`
    font-size: 22px;
    line-height: 40px;
    padding-left: 50px;

    @media (max-width: 500px) {
        line-height: 30px;
        padding-left: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }    
`

export const ActivitiesAuthor = styled.h5`
    padding-left: 52px;
    margin: 10px 0 0 16px;
    font-size: 14px;
    font-variant: small-caps;

    @media (max-width: 500px) {
        padding-left: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }
`

export const SwitchableDiv = styled.div`

`

export const CarouselDiv = styled.div`
`

export const StyledCarousel = styled(Carousel)`
    height: 400px;
    margin: 100px 0;
    padding-left: 12%;
    background-color: var(--ice-variant);
    margin-top: 80px;
    background-color: var(--ice-variant);
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px var(--shadow);

    @media (max-width: 500px) {
        height: 250px;
        margin: 50px 0;
        padding-left: 30%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }
`