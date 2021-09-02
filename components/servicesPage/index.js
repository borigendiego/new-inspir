import React from 'react';
//styles
import styles from './servicesPage.module.scss'
//components and constants
import OurServices from '../ourServices';
import ServicesItem from './ServicesItem';
import { SERVICES_DATA } from './ServicesItem/constants';

const ServicesPage = ({ dataKey }) => {
    //TODO 0 Need to be the route param
    const service = SERVICES_DATA[dataKey];
    console.log(">>service", service);

    return (
        <div className={styles.container}>
            <OurServices isSpecificService={true} />
            <ServicesItem
                title={service.title}
                paragraphs={service.paragraphs}
                paragraph1={service.paragraph1}
                paragraph2={service.paragraph2}
                paragraph3={service.paragraph3}
                paragraph4={service.paragraph4}
                paragraph5={service.paragraph5}
                paragraph6={service.paragraph6}
                image={service.image}
            />
        </div>
    )
};

export default ServicesPage;
