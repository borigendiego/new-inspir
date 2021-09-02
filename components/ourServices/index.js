import React from 'react';
//styles
import styles from './ourServices.module.scss';
//constants and components
import Tile from './Tile';

const OurServices = ({ isSpecificService }) => {
    return (
        <div
            className={`${isSpecificService ? `${styles.container} ${styles.specific_container}` : styles.container}`}
            id={'SERVICES'}
        >
            <h1 className={styles.title}>OUR SERVICES</h1>
            <Tile isSpecificService={isSpecificService} />
        </div>
    )
};

export default OurServices;
