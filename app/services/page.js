import Link from 'next/link';
import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import { services } from '@/data/business';
import { pageMetadata } from '@/utility/metadata';
export const metadata = pageMetadata('Our Services', 'Explore Starlink installation, Wi-Fi networks, CCTV and alarms, IT support, business software and cloud services from Manhenga Tech.', '/services/');
export default function ServicesPage() {
 return <TekprofLayout><PageBanner pageName="Services" title="The right technology. The support to match." description="Connectivity, security and everyday IT assistance for homes and organisations in Zimbabwe." /><section className="py-100 rpy-70"><div className="container"><div className="row">{services.map(service => <div className="col-lg-4 col-md-6" key={service.id}><article className="service-detail-card" data-aos="fade-up"><img src={`/assets/images/manhenga/${service.image}.webp`} alt={service.alt} width="1000" height="667" loading="lazy" /><div><i className={`far ${service.icon}`} aria-hidden="true" /><h2><Link href={`/services/${service.id}/`}>{service.name}</Link></h2><p>{service.description}</p><Link className="read-more" href={`/services/${service.id}/`}>Explore this service <i className="far fa-arrow-right" aria-hidden="true" /></Link></div></article></div>)}</div><div className="inline-cta"><div><h2>Not sure where to start?</h2><p>Tell us about your setup and the problem you want to solve.</p></div><Link href="/contact/" className="theme-btn">Talk to Our Team</Link></div></div></section></TekprofLayout>;
}
