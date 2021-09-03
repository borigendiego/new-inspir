import React from 'react';
//styles
import style from './weAre.module.scss';
//components and constants
import { BOXES_DATA } from './constants';
import Box from './box';
import MobileCarousel from '../common/mobileCarousel';

const WeAre = () => {
    return (
        <div className={style.container} id={'WEARE'}>
            <div className={style.boxes_container}>
                {BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}
            </div>
            <MobileCarousel
                slides={BOXES_DATA.map((value, index) => <Box boxData={value} key={index} />)}
            />
            <h1 className={style.title}>WE ARE</h1>
        </div>
    )
};

export default WeAre;
