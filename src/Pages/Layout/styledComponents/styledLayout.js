import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const NavbarContainer = styled.div`
    position: fixed;
    z-index: 5;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const MenuIcon = styled.button`
    background-color: transparent;
    border: none;
    color: ${props => props.show ? "var(--ice)" : "var(--indaco)"};
    position: absolute;
    z-index: 10;
    left: 50px;
    top: 50px;
    font-size: 50px;
    cursor: pointer;

    @media (max-width: 500px) {
        left: 5px;
        top: 5px;
        font-size: 40px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

//MENU SHOWED
export const MenuContainer = styled.div`
    position: absolute;
    top: 0;
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--indaco);
    box-shadow: 2px 2px 20px 5px var(--shadow);

    @media (max-width: 500px) {
        width: 200px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
        width: 250px;
    }
`

export const ElementContainer = styled.nav`
    display: flex;
    margin: ${props => props.typeContainer === "icon" ?
        "200px auto 20px auto" :
        "20px auto"
    };
    flex-direction: ${props => props.typeContainer === "icon" ?
        "row" :
        "column"
    };
    justify-content: ${props => props.typeContainer === "icon" ?
        "center" :
        ""
    };
    width: ${props => props.typeContainer === "icon" ?
        "" :
        ""
    };
    border: ${props => props.typeContainer === "icon" ?
        "2px solid var(--ice)" :
        ""
    };
    border-radius: ${props => props.typeContainer === "icon" ?
        "20px" :
        ""
    };
    height: ${props => props.typeContainer === "icon" ?
        "40px" :
        ""
    };
    

    @media (max-width: 500px) {
        height: ${props => props.typeContainer === "icon" ?
            "30px" :
            ""
        };
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`


//BTN
export const BtnLink = styled(NavLink)`
    color: var(--ice);
    text-decoration: none;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        margin-bottom: 25px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const BtnText = styled.h2`
    /* font-size: 20px; */
    font-weight: 400;
    text-align: left;

    @media (max-width: 500px) {
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`

export const Icon = styled.span`
    font-size: ${props => props.type === "back" ?
        "33px" :
        "40px"
    };
    padding-top: ${props => props.type === "back" ?
        "3px" :
        ""
    };
    margin-left: 15px;
    margin-right: ${props => props.type === "home" ?
        "15px" :
        ""
    };
    color: var(--ice);

    @media (max-width: 500px) {
        font-size: ${props => props.type === "back" ?
            "24px" :
            "30px"
        };
        margin-left: 10px;
    }

    @media (min-width: 501px) and (max-width: 1000px) {
    }
`