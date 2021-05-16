import React from 'react';
//styles
import './performance.scss';
//components and constants
import WordsBox from './wordsbox';
import { WORDS_DATA } from './constants';
import MobileCarousel from '../common/mobileCarousel';

const Performance = () => {
    return (
        <div className={'performance-container'}>
            <h1 className={'performance-title'}>THE BEST VERSION OF YOUR PERFORMANCE</h1>
            <div className={'words-box-container'}>
                {WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}
            </div>
            <MobileCarousel slides={WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}/>
        </div>
    )
};

export default Performance