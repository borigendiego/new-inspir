import React from 'react';
//styles
import styles from  './header.module.scss';
//components & constants
import { MENU_LINKS } from './constants';
import MobileMenu from './mobile-menu';

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
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img
                    className={styles.logo}
                    src={'/assets/images/logo.png'}
                    alt={'logo'}/>
            </div>
            <ul className={styles.nav_menu} id={'large-screen-menu'}>
                {
                    headerLinks()
                }
            </ul>
            <MobileMenu menuItems={headerLinks} />
        </div>
    )
};

export default Header;
