import React from 'react';
//styles
import './weAre.scss';
//components and constants
import { BOXES_DATA } from './constants';
import Box from './box';
import MobileCarousel from '../common/mobileCarousel';

const WeAre = () => {
    return (
        <div className={'weAre-container'} id={'WEARE'}>
            <div className={'boxes-container'}>
                {BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}
            </div>
            <MobileCarousel slides={BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}/>
            <h1 className={'weAre-title'}>WE ARE</h1>
        </div>
    )
};

export default WeAre;