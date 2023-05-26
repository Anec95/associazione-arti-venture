import SwitchBox from "./components/SwitchBox"
import { ActivitiesDiv, CarouselTitle } from "./styledActivities"
import { useState } from "react"

function Activities(props) {
    const [expanded, setExpanded] = useState(false)

    function handleExpand() {
        setExpanded(oldValue => !oldValue)
    }

    return (
        <ActivitiesDiv
            expanded={expanded}
            title={props.title}
        >
            <CarouselTitle
                onClick={handleExpand}
                expanded={expanded}
            >
                {props.title}
            </CarouselTitle>
            <SwitchBox
                title={props.title}
                expanded={expanded}
            />

        </ActivitiesDiv>
    )   
}

export default Activities