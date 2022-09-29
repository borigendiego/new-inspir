import React from 'react';
//styles
import styles from './header.module.scss';
//components & constants
import { MENU_LINKS } from './constants';
import MobileMenu from './mobile-menu';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const Header = () => {
    const headerLinks = () => MENU_LINKS.map((link,index) =>
        <a
            key={index}
            href={link.linkTo}
            className={styles.header_a_element}
        >
            <li className={styles.list_element}>{link.label}</li>
        </a>
    );

    return(
        <motion.div 
        className={styles.container}
        initial={{
            y: -30,
            opacity: 0,
            }}
        whileInView={{
            y: 0,
            opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{duration: 1}}
        >
            <div className={styles.logo_container}>
                <img
                    className={styles.logo}
                    src={'/assets/images/logo.png'}
                    alt={'logo'}/>
            </div>
            <ul className={styles.nav_menu}>
                {
                    headerLinks()
                }
            </ul>
            <MobileMenu menuItems={headerLinks} />
        </motion.div>
    )
};

export default Header;
