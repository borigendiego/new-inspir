import React from 'react';
//styles
import './contact.scss';
//components and constants
// import icon1 from '../../assets/images/tw_icon.png'
// import icon2 from '../../assets/images/fb_icon.png'
// import icon3 from '../../assets/images/ig_icon.png'
// import icon4 from '../../assets/images/whp_icon.png'
import logo from '../../assets/images/logo.png';
import Form from './Form';

const Contact = () => {
    return (
        <div className={'contact-container'} id={'CONTACT'}>
            <div className={'contact-content'}>
                <div className={'contact-logo-text-icon'}>
                    <div className={'contact-logo-container'}>
                        <img src={logo} alt={'logo'} className={'contact-logo'}/>
                    </div>
                    <div className={'contact-text-container'}>
                        <h2 className={'contact-text'}>FRANCE - AUSTRALIA</h2>
                        <h2 className={'contact-text'}>PARIS - MELBOURNE</h2>
                    </div>
                    {/*<div className={'contact-icons-container'}>*/}
                    {/*    <img className={'contact-icon'} src={icon1} alt={'tw'}/>*/}
                    {/*    <img className={'contact-icon'} src={icon2} alt={'fb'}/>*/}
                    {/*    <img className={'contact-icon'} src={icon3} alt={'ig'}/>*/}
                    {/*    <img className={'contact-icon'} src={icon4} alt={'wsp'}/>*/}
                    {/*</div>*/}
                </div>
                <Form />
            </div>
            <div className={'contact-last'}>
                <div className={'contact-emails'}>
                    <p>bregnier@inspirperformance.com</p>
                    <p>melbourne@inspirperformance.com</p>
                </div>
                <h1 className={'contact-title'}>CONTACT US</h1>
            </div>
        </div>
    )
};

export default Contact