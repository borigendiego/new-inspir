import React from 'react';
import Link from 'next/link';
//styles
import style from './servicesItem.module.scss';
//components and constants

const ServicesItem = ({ title, paragraph1, paragraph2, paragraph3, paragraph4, paragraph5, paragraph6, image, paragraphs }) => {
    //TODO: Refactor this to not render many <p> tags

    return (
        <div className={style.container}>
            <div className={style.layout}>
                <div className={style.text_wrapper}>
                    <h2 className={style.title}>{title}</h2>
                    {paragraphs.map((text) => <p className={style.text}>{text}</p>)}
                    {/*<p className={style.text}>{paragraph1}</p>
                    <p className={style.text}>{paragraph2}</p>
                    <p className={style.text}>{paragraph3}</p>
                    <p className={style.text}>{paragraph4}</p>
                    <p className={style.text}>{paragraph5}</p>
                    <p className={style.text}>{paragraph6}</p>*/}
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
