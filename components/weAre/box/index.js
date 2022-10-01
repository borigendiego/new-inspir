import React from 'react';
//styles
import styles from './box.module.scss';

const Box = ({boxData}) => {
    const { title, icon, backgroundImage, text } = boxData;

    return (
        <div className={styles.box}>
            <div className={`${styles.face} ${styles.face1}`}
                 style={{
                     backgroundImage: `url(${backgroundImage})`,
                     backgroundSize: 'cover',
                }}
            >
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                </div>
            </div>
            <div className={`${styles.face} ${styles.face2}`}>
                <div className={styles.content}>
                    <h3 className={styles.title_two}>{title}</h3>
                    <div className={styles.icon_container}>
                        <img src={icon} alt={'icon'} className={styles.icon}/>
                    </div>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
        </div>
    )
};

export default Box;

//TODO: Empezar a usar Proptypes para mantener consistencia en los componentes
