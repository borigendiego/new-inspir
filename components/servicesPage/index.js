import React from 'react';
//styles
import styles from './servicesPage.module.scss'
//components and constants
import OurServices from '../ourServices';
import ServicesItem from './ServicesItem';

const ServicesPage = ({ service }) => {
    return (
        <div className={styles.container}>
            <OurServices isSpecificService={true} />
            <ServicesItem
                title={service.title}
                paragraphs={service.paragraphs}
                image={service.image}
            />
        </div>
    )
};

export default ServicesPage;
