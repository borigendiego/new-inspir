import React from 'react';
import Link from 'next/link';
//styles
import styles from './tile.module.scss';
import { TILE_DATA } from '../constants';

const Tile = ({ isSpecificService }) => {
    return (
        <div className={`${isSpecificService ? `${styles.container} ${styles.specific_service}` : `${styles.container}`}`}>
            {TILE_DATA.map((element, index) =>
                <Link href={element.linkTo}>
                    <a className={styles.link}>
                        <img src={element.icon} alt={'icon'} className={styles.icon}/>
                        <h3 className={styles.title}>{element.title}</h3>
                    </a>
                </Link>
            )}
        </div>
    )
};

export default Tile;
