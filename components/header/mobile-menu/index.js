import React from 'react';
import PropTypes from 'prop-types';
//Style
import styles from './mobileMenu.module.scss';

const MobileMenu = ({ menuItems }) => {
    return (
        <div className={styles.menu_toggle}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={styles.menu}>
                {menuItems()}
            </ul>
        </div>
    )
};

MobileMenu.prototype = {
    menuItems: PropTypes.func,
}

export default MobileMenu;
