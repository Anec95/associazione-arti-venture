import MenuShowed from "../MenuShowed/MenuShowed"
import { useState } from "react"
import { NavbarContainer, MenuIcon } from "Pages/Layout/styledComponents/styledLayout"


function Navbar() {

    const [show, setShow] = useState(false)

    function handleShow() {
        setShow(prevState => !prevState)
    }
    
    return (        
        <NavbarContainer>
            <MenuIcon
                onClick={handleShow}
                className="material-icons-outlined"
                show={show}
            >
                widgets
            </MenuIcon>
            {show && <MenuShowed />}      
        </NavbarContainer>        
    )
}

export default Navbar