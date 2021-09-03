import { useRouter } from 'next/router'
import ServicesPage from '../../components/servicesPage';
import { SERVICES_DATA } from '../../components/servicesPage/ServicesItem/constants';

const Service = ({ data }) => {
    const router = useRouter();
    const { service } = router.query;

    return (
        <ServicesPage dataKey={service} />
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { service: 'partnership' } },
            { params: { service: 'athlete' } },
            { params: { service: 'executive' } },
            { params: { service: 'team' } },

        ], //Pages created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export async function getStaticProps() {
    return {
        props: {}
    }
}

export default Service
