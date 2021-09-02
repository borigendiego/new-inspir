import { useRouter } from 'next/router'
import ServicesPage from '../../components/servicesPage';

const Service = () => {
    const router = useRouter();
    const { service } = router.query;
    console.log(">>service", service);
    return (
        <ServicesPage dataKey={service} />
    )
}

export default Service
