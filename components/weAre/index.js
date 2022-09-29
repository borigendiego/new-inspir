import React from 'react';
//styles
import style from './weAre.module.scss';
//components and constants
import { BOXES_DATA } from './constants';
import Box from './box';
import MobileCarousel from '../common/mobileCarousel';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const WeAre = () => {
    return (
        <div className={style.container} id={'WEARE'}>
            <motion.div 
                className={style.boxes_container}
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
                {BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}
            </motion.div>
            <MobileCarousel
                slides={BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}
                customClass='weAre-sliderWrapper'
            />
            <h1 className={style.title}>WE ARE</h1>
        </div>
    )
};

export default WeAre;
