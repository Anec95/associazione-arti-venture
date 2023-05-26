import { ScheduleSection } from "Pages/Home/styledComponents/styledHome"
import NEText from "./components/TextBox"
import Activities from "./components/Activities/Activities"

function NuovaEra() {

    return (
        <ScheduleSection
            id="nuova_era"
            name={"nuova_era"}
        >
            <NEText/>
            <Activities
                title={"Artigianato"}
            />   
            <Activities
                title={"Trattamenti"}
            />       
        </ScheduleSection>
    )   
}

export default NuovaEra