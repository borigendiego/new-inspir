import React from 'react';
import PropTypes from 'prop-types';
//Style
import './mobileMenu.scss';

const MobileMenu = ({ menuItems }) => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={'menu'}>
                {menuItems()}
            </ul>
        </div>
    )
};

MobileMenu.prototype = {
    menuItems: PropTypes.func,
}

export default MobileMenu;