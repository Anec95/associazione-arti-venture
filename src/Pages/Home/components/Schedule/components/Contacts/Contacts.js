import { ScheduleSection, ScheduleTitle } from "Pages/Home/styledComponents/styledHome"
import EmailForm from "./components/EmailForm"


function Contacts() {

    return (
        <ScheduleSection
            id="chi_siamo"
        >
            <ScheduleTitle>
                Contattaci
            </ScheduleTitle>

            <EmailForm />
            
        </ScheduleSection>
    )   
}

export default Contacts