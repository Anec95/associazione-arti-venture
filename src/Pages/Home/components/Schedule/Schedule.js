import FirstSchedule from "./components/FirstSchedule/FirstSchedule";
import {
    HomeSection,
    MiddleContainer
} from "Pages/Home/styledComponents/styledHome";
import {
    motion,
    useTransform,
    useScroll
} from "framer-motion";
import { useRef } from "react";
import ScrollDown from "./components/ScrollDown/ScrollDown";
import ChiSiamo from "./components/ChiSiamo/ChiSiamo";
import NuovaEra from "./components/NuovaEra/NuovaEra";
import Contacts from "./components/Contacts/Contacts";

function useParallax(value, distance) {
    // const x = useMotionValue(value)
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Schedule(props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 0);
    // se si hanno problemi di scroll modificare il secondo parametro di y

    return (
        <HomeSection
            position={props.position}
        >
            <MiddleContainer
                position={props.position}
                as={motion.div}
                style={{ y }}
                ref={ref}
            >
                {props.position === 1 &&
                    <FirstSchedule
                        position={props.position}
                    />
                }
                {props.position === 2 &&
                    <ChiSiamo
                        position={props.position}
                    />
                }
                {props.position === 3 &&
                    <NuovaEra
                        position={props.position}
                    />
                }
                {props.position === 4 &&
                    <Contacts
                        position={props.position}
                    />
                }
            </MiddleContainer>
            {props.position === 1 &&
                <ScrollDown />
            }
        </HomeSection>
    )   
}

export default Schedule