import Link from 'next/link';
import { notFound } from 'next/navigation';
import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import { services, enquiryLink } from '@/data/business';
import { serviceDetails } from '@/data/service-details';
import { pageMetadata } from '@/utility/metadata';
export function generateStaticParams() { return services.map(service => ({ slug: service.id })); }
export function generateMetadata({ params }) { const service = services.find(item => item.id === params.slug); return service ? pageMetadata(service.name, service.description, `/services/${service.id}/`, service.image) : {}; }
export default function ServicePage({ params }) {
 const service = services.find(item => item.id === params.slug); if (!service) notFound(); const details = serviceDetails[service.id];
 return <TekprofLayout><PageBanner pageName={service.name} parent={{ name: 'Services', href: '/services/' }} /><section className="py-100 rpy-70"><div className="container"><div className="row"><div className="col-lg-8"><img className="content-feature-image mb-35" src={`/assets/images/manhenga/${service.image}.webp`} alt={service.alt} width="1000" height="667" /><div className="section-title mb-25"><span className="sub-title color-primary">How we can help</span><h2>{service.name} in Bindura and across Zimbabwe</h2></div><p className="article-lead">{service.description}</p><p>{details.intro}</p><h3>What we help with</h3><ul className="content-list">{details.included.map(text => <li key={text}>{text}</li>)}</ul><h3>To prepare your quotation</h3><ul className="content-list">{details.prepare.map(text => <li key={text}>{text}</li>)}</ul><a className="theme-btn mt-20" href={enquiryLink(service.name)} target="_blank" rel="noopener noreferrer">Request a Quotation</a></div><aside className="col-lg-4"><div className="page-sidebar"><h2>Our Services</h2><nav aria-label="Other services"><ul>{services.map(item => <li key={item.id}><Link href={`/services/${item.id}/`} aria-current={item.id === service.id ? 'page' : undefined}>{item.name}</Link></li>)}</ul></nav><div className="sidebar-cta"><h3>Need equipment too?</h3><p>Explore our store and request a quote for your setup.</p><Link className="read-more" href="/store/">Visit the Store <i className="far fa-arrow-right" aria-hidden="true" /></Link></div></div></aside></div></div></section></TekprofLayout>;
}
