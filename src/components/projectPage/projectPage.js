import projectPage from './projectPage.module.css';
import MouseEffect, { NoMouseEffect } from '@/components/mouseEffect/mouseEffect';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectPreview from '@/components/projectPreview/projectPreview';
import { useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
export default function ProjectPage({ title, projectPreviews, columns }) {
    const [fade, setFade] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [reveal, setReveal] = useState(false);
    const mainRef = useRef();
    useEffect(() => {
        mainRef.current.addEventListener("scroll", () => {
            console.log(mainRef.current.scrollTop);
            if (mainRef.current.scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });

        setReveal(true);
    }, []);

    const back = () => {
        setFade(true);
        setTimeout(() => {
            location.replace("/#");
        }, 500);
    }
    return (
        <>
            <motion.div
                initial={fade && { opacity: 1 }}
                animate={fade && { opacity: 0 }}
                transition={{ duration: .5 }}
            >
                <MouseEffect>
                    <div ref={mainRef} id={projectPage.mainContainer}>
                        <div id={projectPage.thing} className={clsx(
                            scrolled && projectPage.thingFull,
                            reveal ? projectPage.thingCut : projectPage.thingHide)} />

                        <div id={projectPage.headerContainer}>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <NoMouseEffect>
                                    <span id={projectPage.backButton} onClick={back}>
                                        <FaArrowLeft />
                                    </span>
                                    <span id={projectPage.headerText}>
                                        {/* <BouncyText direction="horizontal" bounceScale={.01}> */}
                                        {title}
                                        {/* </BouncyText> */}
                                    </span>
                                </NoMouseEffect>
                            </motion.span>
                        </div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                        >
                            <div id={projectPage.mainContent}
                                style={{
                                    gridTemplateColumns: `repeat(${columns}, 1fr)`
                                }}
                            >
                                {projectPreviews.map((projectPreview, i) => (
                                    <NoMouseEffect key={i}>
                                        <ProjectPreview key={i} description={projectPreview} />
                                    </NoMouseEffect>
                                ))}
                            </div>
                        </motion.span>

                    </div >
                </MouseEffect >
            </motion.div>
        </>

    )
}