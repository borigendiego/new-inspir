import React from 'react';
import Link from 'next/link';
//styles
import style from './servicesItem.module.scss';

const ServicesItem = (
    {
        title,
        image,
        paragraphs
    }) => {

    return (
        <div className={style.container}>
            <div className={style.layout}>
                <div className={style.text_wrapper}>
                    <h2 className={style.title}>{title}</h2>
                    {paragraphs.map((text, index) => <p key={index} className={style.text}>{text}</p>)}
                    <Link href={'/'}>
                        <a className={style.back_button}>
                            <span>&#8249; MAIN PAGE</span>
                        </a>
                    </Link>
                </div>
                <img src={image} alt={''} className={style.image} />
            </div>
        </div>
    )
};

export default ServicesItem;
