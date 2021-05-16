import React from 'react';
//styles
import './ourServices.scss';
//constants and components
import Tile from './Tile';
import { TILE_DATA } from './constants';

const OurServices = () => {
    return (
        <div className={'ourServices-container'} id={'SERVICES'}>
            <h1 className={'ourServices-title'}>OUR SERVICES</h1>
            <div className={'tile-container'}>
                {TILE_DATA.map((value, index) => <Tile tileData={value} key={index}/>)}
            </div>
        </div>
    )
};

export default OurServices;