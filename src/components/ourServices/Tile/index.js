import React from 'react';
import {
    Link
} from 'react-router-dom';
//styles
import './tile.scss';
//components and constants

const Tile = ({tileData}) => {
    const { title, icon, linkTo } = tileData;

    return (
        <Link to={`${linkTo}`} className={'tile-link'}>
            <img src={icon} alt={'icon'} className={'tile-icon'}/>
            <h3 className={'tile-title'}>{title}</h3>
        </Link>
    )
};

export default Tile;