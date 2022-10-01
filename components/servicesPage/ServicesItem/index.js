import React from 'react';
import Link from 'next/link';
//styles
import style from './servicesItem.module.scss';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const ServicesItem = (
    {
        title,
        image,
        paragraphs
    }) => {

    return (
        <motion.div 
        className={style.container}
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
            <div className={style.layout}>
                <div className={style.text_wrapper}>
                    <div>
                        <h2 className={style.title}>{title}</h2>
                        {paragraphs.map((text, index) => <p key={index} className={style.text}>{text}</p>)}
                    </div>
                    <Link href={'/'}>
                        <a className={style.back_button}>
                            <span>&#8249; MAIN PAGE</span>
                        </a>
                    </Link>
                </div>
                <img src={image} alt={''} className={style.image} />
            </div>
        </motion.div>
    )
};

export default ServicesItem;
