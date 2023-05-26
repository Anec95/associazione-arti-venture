import { ElementContainer, MenuContainer } from "Pages/Layout/styledComponents/styledLayout"
import CommonBtn from "../ButtonNavbar/CommonBtn"
import IconBtn from "../ButtonNavbar/IconBtn"

function MenuShowed() {
    return (
        <MenuContainer>
            <ElementContainer
                typeContainer={"icon"}
            >
                <IconBtn
                    type={"back"}
                />
                <IconBtn
                    type={"home"}
                />
            </ElementContainer>
            <ElementContainer>
                <CommonBtn
                    url={"/chi_siamo"}
                    text={"Chi Siamo"}
                />
                <CommonBtn
                    url={"/articoli"}
                    text={"Articoli"}
                />
                <CommonBtn
                    url={"/attivita"}
                    text={"Attività"}
                />
                <CommonBtn
                    url={"/bibliografia"}
                    text={"Bibliografia"}
                />
            </ElementContainer>
        </MenuContainer>
    )
}

export default MenuShowed