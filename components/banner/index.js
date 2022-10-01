import React from 'react';
//styles
import styles from './banner.module.scss';
//components
import Header from '../header';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";

const Banner = () => {
    return(
        <div className={styles.container}>
            <div className={styles.overlay}/>
            <Header />
            <video
                autoPlay
                muted
                loop
                id={'video'}
                className={styles.video}>
                <source
                    src={'/assets/images/video_header.mp4'}
                    type={'video/mp4'}
                />
            </video>
            <motion.h1 
            className={styles.text}
            initial={{
                opacity: 0,
                }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >
                GETTING OVER YOU IS WHAT INSPIRES US
            </motion.h1>
        </div>
    )
};

export default Banner;
