import React from 'react';
//styles
import styles from './performance.module.scss';
//components and constants
import WordsBox from './wordsbox';
import { WORDS_DATA } from './constants';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
import MobileCarousel from '../common/mobileCarousel';

const Performance = () => {
    return (
        <div className={styles.container}>
            <motion.h1 
            className={styles.title}
            initial={{
                opacity: 0,
                y: -15
                }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >THE BEST VERSION OF YOUR PERFORMANCE</motion.h1>
            <motion.div 
            className={styles.words_box_container}
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
                {WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}
            </motion.div>
            <div className={styles.carousel_container}>
                <MobileCarousel
                    autoPlay
                    slides={WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}
                    customClass='performance-sliderWrapper'
                />
            </div>
        </div>
    )
};

export default Performance
