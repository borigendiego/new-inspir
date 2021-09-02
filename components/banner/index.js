import React from 'react';
//styles
import styles from './banner.module.scss';
//components
import Header from '../header';

const Banner = () => {
    return(
        <div className={styles.container}>
            <div className={styles.overlay}/>
            <Header />
            <video
                autoPlay
                muted
                loop
                id={'video'}
                className={styles.video}>
                <source
                    src={'/assets/images/video_header.mp4'}
                    type={'video/mp4'}
                />
            </video>
            <h1 className={styles.text}>
                GETTING OVER YOU IS WHAT INSPIRES US
            </h1>
        </div>
    )
};

export default Banner;
