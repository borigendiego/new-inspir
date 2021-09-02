import React from 'react';
//styles
import styles from './ourServices.module.scss';
//constants and components
import Tile from './Tile';
import { TILE_DATA } from './constants';

const OurServices = () => {
    return (
        <div className={styles.container} id={'SERVICES'}>
            <h1 className={styles.title}>OUR SERVICES</h1>
            <div className={styles.tile_container}>
                {TILE_DATA.map((value, index) => <Tile tileData={value} key={index}/>)}
            </div>
        </div>
    )
};

export default OurServices;
