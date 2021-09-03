import React from 'react';
import PropTypes from 'prop-types';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
//Styles
import styles from './mobile-carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
//Icons
import Arrow from './assets/right-arrow.svg';

const MyCarousel = ({ slides, autoPlay }) => {
    return (
        <div className={styles.container}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={110}
                totalSlides={slides.length}
                isPlaying={autoPlay}
                interval={3000}
            >
                <div>
                    <Slider
                        className={styles.slider_wrapper}
                    >
                        {
                            slides.map((item, index) =>
                                <Slide key={`slide-${index}`} index={index}>
                                    {item}
                                </Slide>
                            )
                        }
                    </Slider>
                </div>
                <div className={styles.arrows_container}>
                    <ButtonBack className={`${styles.arrow} ${styles.back}`}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonBack>
                    <ButtonNext className={`${styles.arrow} ${styles.next}`}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
};

MyCarousel.prototypes = {
    slides: PropTypes.array,
};

export default MyCarousel;
