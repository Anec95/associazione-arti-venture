import ActivitiesText from "./ActivitiesText"
import { SwitchableDiv } from "../styledActivities"
import ActivitiesCarousel from "./ActivitiesCarousel"


function SwitchBox(props) {

    return (
        <SwitchableDiv>
            {props.expanded &&
                <>
                    <ActivitiesText
                        title={props.title}
                    />
                
                    <ActivitiesCarousel/>
                </>
            }
        </SwitchableDiv>
    )   
}

export default SwitchBox