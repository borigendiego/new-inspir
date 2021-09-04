import ServicesPage from '../../components/servicesPage';
import { SERVICES_DATA } from '../../components/servicesPage/ServicesItem/constants';

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { service: 'partnership' } },
            { params: { service: 'athlete' } },
            { params: { service: 'executive' } },
            { params: { service: 'team' } },

        ], //Pages created at build time
        fallback: false //indicates the type of fallback
    }
}

export const getStaticProps = async (context) => {
    const service = context.params.service;

    return {
        props: {
            data: SERVICES_DATA[service]
        }
    }
}

const Service = ({ data }) => {
    return (
        <ServicesPage service={data} />
    )
}

export default Service
