import React from 'react';
//styles
import styles from './mission.module.scss';
//Constants
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

//TODO make this just one array MISSION_PARAGRAPHS
import { MISSION_PARAGRAPHS } from './constants';

const Mission = () => {
    return (
        <div className={styles.container} id={'MISSION'}>
            <div className={'mission-title-container'}>
                <motion.h1 
                className={styles.title}
                initial={{
                    opacity: 0,
                    }}
                whileInView={{
                    opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{duration: 1}}
                >MISSION</motion.h1>
            </div>
            <motion.div 
            className={'mission-text-container'}
            initial={{
                opacity: 0,
                x: -25,
                }}
            whileInView={{
                opacity: 1,
                x: 0,

            }}
            viewport={{ once: true }}
            transition={{duration: 1}}
            >
                {
                    MISSION_PARAGRAPHS.map((item, index) => {
                        return <p className={styles.text}>{item}</p>
                    })
                }
                <p className={styles.last_text}>At INSPIR PERFORMANCE, we offer athletes real help.</p>
            </motion.div>
        </div>
    )
};

export default Mission;
