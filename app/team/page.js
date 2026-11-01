import Link from 'next/link';
import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import TeamSection from '@/components/TeamSection';
import { pageMetadata } from '@/utility/metadata';
export const metadata = pageMetadata('Our Team', 'Connect with Manhenga Tech for networking, CCTV, IT and business systems support in Bindura, Zimbabwe.', '/team/', 'support');
export default function TeamPage() {
 return <TekprofLayout><PageBanner pageName="Our Team" title="Your technology. People who can help." description="Start with one conversation, from choosing equipment to ongoing support." /><section className="pt-100 rpt-70"><div className="container"><div className="row align-items-center"><div className="col-lg-6"><div className="section-title mb-25"><span className="sub-title color-primary">Local Support</span><h2>Your point of contact, from setup to support.</h2></div><p>Talk to Manhenga Tech about the service you need. We bring connectivity, security and everyday IT support together, with clear advice and practical assistance.</p><Link className="theme-btn mt-20 mb-30" href="/contact/">Talk to Our Team</Link></div><div className="col-lg-6"><img className="content-feature-image" src="/assets/images/manhenga/support.webp" alt="Illustrative computer hardware support at a workbench" width="1000" height="667" /></div></div></div></section><TeamSection /></TekprofLayout>;
}
