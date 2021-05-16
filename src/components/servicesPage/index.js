import React from 'react';
//styles

//components and constants
import OurServices from '../ourServices';
import { SERVICES_DATA } from './ServicesItem/constants';
import ServicesItem from "./ServicesItem";

const ServicesPage = () => {
    return (
        <div>
            <OurServices />
            {SERVICES_DATA.map((value, index) => <ServicesItem servicesData={value} key={index} />)}
        </div>
    )
};

export default ServicesPage;