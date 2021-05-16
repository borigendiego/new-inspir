import React from 'react';
//styles
import './box.scss';

const Box = ({boxData}) => {
    const { title, icon, backgroundImage, text } = boxData;

    return (
        <div className={'box'}>
            <div className={'face face1'} style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
            }}
            >
                <div className={'box-content'}>
                    <h1 className={'box-title'}>{title}</h1>
                </div>
            </div>
            <div className={'face face2'}>
                <div className={'box-content'}>
                    <h3 className={'box-title-two'}>{title}</h3>
                    <img src={icon} alt={'icon'} className={'box-icon'}/>
                    <p className={'box-text'}>{text}</p>
                </div>
            </div>
        </div>
    )
};

export default Box;

//TODO: Empezar a usar Proptypes para mantener consistencia en los componentes