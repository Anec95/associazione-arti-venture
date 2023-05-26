import {
    ScrollContainer,
    ScrollIcon,
    ScrollText
} from "Pages/Home/styledComponents/styledHome"


function ScrollDown() {
    

    return(
        <ScrollContainer>
            <ScrollText>Scorri</ScrollText>
            <ScrollIcon
                className="material-icons-outlined"
            >
                keyboard_arrow_down
            </ScrollIcon>
        </ScrollContainer>
                
            
    )
}

export default ScrollDown