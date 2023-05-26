import { BtnLink, BtnText } from "Pages/Layout/styledComponents/styledLayout"


function CommonBtn(props) {
    return (
        <BtnLink
            to={props.url}
        >
            <BtnText>
                {props.text}
            </BtnText>
        </BtnLink>
    )
}

export default CommonBtn