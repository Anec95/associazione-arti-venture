import { motion } from "framer-motion"
import {
    MainTitle,
    MainSubtitle,
    QuotesContainer,
    MainQuotes,
    MainAuthor
} from "Pages/Home/styledComponents/styledHome"


function FirstSchedule() {
    

    return(
        <>
           <MainTitle>
                Arti Venture
            </MainTitle>
            <MainSubtitle>
                Vedute dal Mondo del Fuoco
            </MainSubtitle>
            <QuotesContainer
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 3 }}
            >
                <MainQuotes>
                    Il Fuoco fa comprendere il bello;
                </MainQuotes>
                <MainQuotes>
                    sviluppa la capacità creativa e depone memorie imperiture
                    nel tesoro del Calice.
                </MainQuotes>
                <MainAuthor>
                    -- Mondo del Fuoco 1933, Agni Yoga
                </MainAuthor>
            </QuotesContainer>
        </>
                
            
    )
}

export default FirstSchedule