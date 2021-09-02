import React from 'react';
import Link from 'next/link';
//styles
import styles from './tile.module.scss';

const Tile = ({tileData}) => {
    const { title, icon, linkTo } = tileData;

    return (
        <Link href={`${linkTo}`} className={styles.link}>
            <img src={icon} alt={'icon'} className={styles.icon}/>
            <h3 className={styles.title}>{title}</h3>
        </Link>
    )
};

export default Tile;
