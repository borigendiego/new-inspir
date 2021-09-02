import React from 'react';
//styles
import styles from './mission.module.scss';
//Constants
//TODO make this just one array MISSION_PARAGRAPHS
import {
    MISSION_PARAGRAPH_ONE,
    MISSION_PARAGRAPH_TWO,
    MISSION_PARAGRAPH_THREE,
    MISSION_PARAGRAPH_FOUR
} from './constants';

const Mission = () => {
    return (
        <div className={styles.container} id={'MISSION'}>
            <div className={'mission-title-container'}>
                <h1 className={styles.title}>MISSION</h1>
            </div>
            <div className={'mission-text-container'}>
                <p className={styles.text}>{MISSION_PARAGRAPH_ONE}</p>
                <p className={styles.text}>{MISSION_PARAGRAPH_TWO}</p>
                <p className={styles.text}>{MISSION_PARAGRAPH_THREE}</p>
                <p className={styles.text}>{MISSION_PARAGRAPH_FOUR}</p>
                <p className={styles.last_text}>At INSPIR PERFORMANCE, we offer athletes real help.</p>
            </div>
        </div>
    )
};

export default Mission;
