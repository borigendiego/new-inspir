import React from 'react';
//styles
import './header.scss';
//components & constants
import { MENU_LINKS } from './constants';
import MobileMenu from './mobile-menu';
//images
import logo from '../../assets/images/logo.png';

const Header = () => {
    const headerLinks = () => MENU_LINKS.map((link,index) =>
        <a key={index} href={link.linkTo} className={'header-a-element'}><li className={'header-list-element'}>{link.label}</li></a>);

    return(
        <div className={'header-container'}>
            <div className={'header-logo-container'}>
                <img className={'header-logo'} src={logo} alt={'logo'}/>
            </div>
            <ul className={'nav-menu'} id={'large-screen-menu'}>
                {
                    headerLinks()
                }
            </ul>
            <MobileMenu menuItems={headerLinks} />
        </div>
    )
};

export default Header;