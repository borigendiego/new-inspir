import React from 'react';
//styles
import './mission.scss';
//comps and constants
import { MISSION_PARAGRAPH_ONE,
    MISSION_PARAGRAPH_TWO,
    MISSION_PARAGRAPH_THREE,
    MISSION_PARAGRAPH_FOUR } from './constants';

const Mission = () => {
    return (
        <div className={'mission-container'} id={'MISSION'}>
            <div className={'mission-title-container'}>
                <h1 className={'mission-title'}>MISSION</h1>
            </div>
            <div className={'mission-text-container'}>
                <p className={'mission-text'}>{MISSION_PARAGRAPH_ONE}</p>
                <p className={'mission-text'}>{MISSION_PARAGRAPH_TWO}</p>
                <p className={'mission-text'}>{MISSION_PARAGRAPH_THREE}</p>
                <p className={'mission-text'}>{MISSION_PARAGRAPH_FOUR}</p>
                <p className={'mission-last-text'}>At INSPIR PERFORMANCE, we offer athletes real help.</p>
            </div>
        </div>
    )
};

export default Mission;