import React from 'react';
import {
    Link
} from 'react-router-dom';
//styles
import './servicesItem.scss';
//components and constants

const ServicesItem = (props) => {
    const { title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, image } = props;

    return (
        <div className={'services-item-container'}>
            <div className={'services-item-layout'}>
                <div className={'services-item-text-wrapper'}>
                    <h2 className={'services-item-title'}>{title}</h2>
                    <p className={'services-item-text'}>{paragraph1}</p>
                    <p className={'services-item-text'}>{paragraph2}</p>
                    <p className={'services-item-text'}>{paragraph3}</p>
                    <p className={'services-item-text'}>{paragraph4}</p>
                    <p className={'services-item-text'}>{paragraph5}</p>
                    <p className={'services-item-text'}>{paragraph6}</p>
                    <Link to={'/'} className={'our-services-back-button'}>
                        <span>&#8249; MAIN PAGE</span>
                    </Link>
                </div>
                <img src={image} alt={''} className={'services-item-image'}/>
            </div>
        </div>
    )
};

export default ServicesItem;