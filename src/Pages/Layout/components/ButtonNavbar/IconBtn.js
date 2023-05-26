import { BtnLink, Icon } from "Pages/Layout/styledComponents/styledLayout"
import { useNavigate } from "react-router-dom"


function IconBtn(props) {
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    return (
        <BtnLink
            to= {props.type === "home" && "/"}
            onClick= {props.type === "back" && handleBack}
        >
            <Icon
                className="material-icons-outlined"
                type={props.type}
            >
                {props.type === "back" ? "arrow_back_ios" : "home" }
            </Icon>
        </BtnLink>
    )
}

export default IconBtn