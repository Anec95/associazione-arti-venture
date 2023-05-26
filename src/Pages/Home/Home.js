import { ProgressBar } from "./styledComponents/styledHome"
import {
  motion,
  useScroll,
  useSpring
//   useMotionValue
} from "framer-motion";
import Schedule from "./components/Schedule/Schedule";


export default function App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Schedule
                position={1}
            />

            <Schedule
                position={2}
            />

            <Schedule
                position={3}
            />

            <ProgressBar
                as={motion.div}
                style={{ scaleX }}
            />
        </>
    );
}
