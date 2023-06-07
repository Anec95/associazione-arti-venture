import { styled } from "styled-components";

export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 10px;
`

export const StyledLabel = styled.label`
    font-family: 'Roboto';
    margin: 20px 0 5px 0;
`

export const StyledTextArea = styled.textarea`
    height: 150px;
    font-size: 20px;
    padding: 20px;
    box-shadow: inset 2px 2px 10px var(--shadow);
    border-radius: 12px;
    border: none;
    background-color: var(--ice);
`

export const StyledInput = styled.input`
    ${
        props => props.type === "submit" ?
        {
            width: "max-content",
            padding: "10px 40px",
            fontSize: "20px",
            fontFamily: "Aboreto",
            marginTop: "30px",
            boxShadow: "2px 2px 10px var(--shadow)",
            fontWeight: "500",
            alignSelf: "center",
            cursor: "pointer"
        } :
        {
            height: "40px",
            fontSize: "20px",
            paddingLeft: "20px",
            boxShadow: "inset 2px 2px 10px var(--shadow)"
        }
    }
    
    border-radius: 12px;
    border: none;
    background-color: var(--ice);
`


// LOADING LOGO
export const LoadingBase = styled.div`
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    margin: 100px auto;
    rotate: 45deg;
    width: 60px;
    height: 60px;
`

export const LoadingSquare = styled.div`
    position: absolute;
    width: 45%;
    height: 45%;
    background-color: var(--indaco);
    animation: movement 3s ease infinite;
    animation-delay: ${ props => 
        props.numb === '2' ? 
        "0.75s" :
        props.numb === '3' ?
        "1.5s" :
        props.numb === '4' ?
        "2.25s" :
        "0s"
    };

    @keyframes movement {
        0% {top: 0; left: 0;}
        25% {top: 0; left: 30px;}
        50% {top: 30px; left: 30px;}
        75% {top: 30px; left: 0;}
        100% {top: 0; left: 0;}
    }
`