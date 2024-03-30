import projectPage from './projectPage.module.css';
import MouseEffect, { NoMouseEffect } from '@/components/mouseEffect/mouseEffect';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import ProjectPreview from '@/components/projectPreview/projectPreview';
import { useEffect, useState } from 'react';
export default function ProjectPage({ title, projectPreviews, columns }) {
    const [fade, setFade] = useState(false);


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
                    <div id={projectPage.mainContainer}>
                        <div id={projectPage.thing} />

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