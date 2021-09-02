import React from 'react';
//styles
import styles from './wordsBox.module.scss';

const WordsBox = ({wordsBoxData}) => {
    const { word1, word2, word3, word4, word5 } = wordsBoxData;

    //TODO: Use map to render the li
    return (
        <ul className={styles.container}>
           <li className={styles.word} data-text={word1}>{word1}</li>
           <li className={styles.word} data-text={word2}>{word2}</li>
           <li className={styles.word} data-text={word3}>{word3}</li>
           <li className={styles.word} data-text={word4}>{word4}</li>
           <li className={styles.word} data-text={word5}>{word5}</li>
        </ul>
    )
};

export default WordsBox;
