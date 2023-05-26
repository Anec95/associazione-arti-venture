import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeMain = styled.main`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
`

export const SectionImg = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    perspective: 500px;
    position: relative;
`

export const HomeImg = styled.img`
    width: 500px;
`


// COMPONENTI REALI
// COMMON STYLES
export const HomeSection = styled.section`
    width: 100vw;
    height: 100vh;
    position: relative;
    scroll-snap-align: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props =>
        props.position %2 === 0 ? 
        "var(--ice-variant)" :
        "var(--ice)"
    };
`

export const MiddleContainer = styled.div`
    width: ${props => props.position === 1 ?
        "max-content" :
        "50%"
    };
    color: var(--black);
    height: max-content;
`

//MAIN STYLES
export const MainTitle = styled.h1`
    width: max-content;
    font-size: 100px;

    @media (max-width: 500px) {
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 70px;
    }
`

export const MainSubtitle = styled.h3`
    font-size: 30px;
    font-variant: small-caps;

    @media (max-width: 500px) {
        font-size: 14px;
    }
`

export const QuotesContainer = styled.div`
    margin: 50px 10px;

    @media (max-width: 500px) {
        margin: 20px 0;
        width: 220px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const MainQuotes = styled.h6`
    font-size: 28px;

    @media (max-width: 500px) {
        font-size: 22px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 38px;
    }
`

export const MainAuthor = styled.h5`
    margin-top: 10px;
    font-size: 16px;
    font-variant: small-caps;

    @media (max-width: 500px) {
        font-size: 14px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }
`

// SCROLL DOWN BOX
export const ScrollContainer = styled.div`
    height: max-content;
    width: max-content;
    color: var(--black);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const ScrollText = styled.h3`
    font-size: 30px;

    @media (max-width: 500px) {
        font-size: 16px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const ScrollIcon = styled.span`
    font-size: 60px;

    @media (max-width: 500px) {
        font-size: 40px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`


//SECONDARY SCHEDULE STYLES
export const ScheduleSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    color: var(--black);
    position: relative;

    @media (max-width: 500px) {
        padding: 0 10%;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        padding: 0 15%;
    }
`

export const ScheduleTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 15px;

    @media (max-width: 500px) {
        font-size: 30px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 45px;
    }
`

export const ScheduleSubtitle = styled.h3`
    font-size: 30px;
    margin: 35px 0 15px 0;

    @media (max-width: 500px) {
        font-size: 20px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 32px;
    }
`

export const ScheduleText = styled.p`
    font-size: 18px;
    margin-bottom: 2px;
    margin-left: 10px;

    @media (max-width: 500px) {
        font-size: 16px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 20px;
    }    
`

export const ScheduleLink = styled(NavLink)`
    text-align: end;
    margin-top: 30px;

    @media (min-width: 501px) and (max-width: 1000px) {
        font-size: 18px;
    }  
`

export const Separe = styled.hr`
    width: 100%;
    margin: 30px 0;
`


//PAGE PROGRESS BAR
export const ProgressBar = styled.div`
    background-color: var(--indaco);
    position: fixed;
    left: 0;
    right: 0;
    height: 5px;
    bottom: 10px;
`