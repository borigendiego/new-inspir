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
import './mobile-carousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
//Icons
import Arrow from './assets/right-arrow.svg';

const MyCarousel = ({ slides }) => {
    return (
        <div className={'mobile-carousel_container'}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={110}
                totalSlides={slides.length}
            >
                <div className={'mobile-carousel_sliders'}>
                    <Slider
                        className={'mobile-carousel_slider-wrapper'}
                    >
                        {
                            slides.map((item, index) =>
                                <Slide key={`slide-${index}`} index={index} className={'mobile-carousel_slide'}>
                                    {item}
                                </Slide>
                            )
                        }
                    </Slider>
                </div>
                <div className={'arrows-container'}>
                    <ButtonBack className={'arrow back'}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonBack>
                    <ButtonNext className={'arrow next'}>
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