import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import Contact from '@/components/Contact';
import { pageMetadata } from '@/utility/metadata';
export const metadata = pageMetadata('Contact Us', 'Contact Manhenga Tech in Bindura for Starlink, CCTV, networks and IT support. Call +263 77 931 3243 or email info@manhenga.com.', '/contact/', 'support');
export default function ContactPage() { return <TekprofLayout><PageBanner pageName="Contact" title="Let’s Get Your Technology Working." description="Tell us what you need and request a quotation." /><Contact /></TekprofLayout>; }
