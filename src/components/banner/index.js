import React from 'react';
//styles
import './banner.scss';
//components
import Header from '../header';
import video from '../../assets/images/video_header.mp4';

const Banner = () => {
    return(
        <div className={'banner-container'}>
            <div className={'banner-overlay'}/>
            <Header />
            <video autoPlay muted loop id={'video'} className={'banner-video'}>
                <source src={video} type={'video/mp4'}/>
            </video>
            <h1 className={'banner-text'}>
                GETTING OVER YOU IS WHAT INSPIRES US
            </h1>
        </div>
    )
};

export default Banner;