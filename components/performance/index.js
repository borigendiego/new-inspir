import React from 'react';
//styles
import styles from './performance.module.scss';
//components and constants
import WordsBox from './wordsbox';
import { WORDS_DATA } from './constants';
import MobileCarousel from '../common/mobileCarousel';

const Performance = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST VERSION OF YOUR PERFORMANCE</h1>
            <div className={styles.words_box_container}>
                {WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}
            </div>
            <MobileCarousel
                autoPlay
                slides={WORDS_DATA.map((value, index) => <WordsBox wordsBoxData={value} key={index}/>)}
            />
        </div>
    )
};

export default Performance
