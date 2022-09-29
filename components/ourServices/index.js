import React from 'react';
//styles
import styles from './ourServices.module.scss';
//constants and components
import Tile from './Tile';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const OurServices = ({ isSpecificService }) => {
    return (
        <div
            className={`${isSpecificService ? `${styles.container} ${styles.specific_container}` : styles.container}`}
            id={'SERVICES'}
        >
            <h1 className={styles.title}>OUR SERVICES</h1>
            <motion.div
                className={styles.boxes_container}
                initial={{
                    opacity: 0,
                    x: -15,
                    }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 0.5}}
            >
                <Tile isSpecificService={isSpecificService} />
            </motion.div> 
        </div>
    )
};

export default OurServices;
