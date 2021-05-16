import React from 'react';
//styles
import './wordsBox.scss';

const WordsBox = ({wordsBoxData}) => {
    const { word1, word2, word3, word4, word5 } = wordsBoxData;

    return (
        <ul className={'words-container'}>
           <li className={'word'} data-text={word1}>{word1}</li>
           <li className={'word'} data-text={word2}>{word2}</li>
           <li className={'word'} data-text={word3}>{word3}</li>
           <li className={'word'} data-text={word4}>{word4}</li>
           <li className={'word'} data-text={word5}>{word5}</li>
        </ul>
        // <div className={'words-container'}>
        //    <h3 className={'word'} data-text={word1}>{word1}</h3>
        //    <h3 className={'word'} data-text={word2}>{word2}</h3>
        //    <h3 className={'word'} data-text={word3}>{word3}</h3>
        //    <h3 className={'word'} data-text={word4}>{word4}</h3>
        //    <h3 className={'word'} data-text={word5}>{word5}</h3>
        // </div>
    )
};

export default WordsBox;