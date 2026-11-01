import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import BlogIndex from '@/components/BlogIndex';
import { pageMetadata } from '@/utility/metadata';
export const metadata = pageMetadata('Blog & Guides', 'Practical guides from Manhenga Tech on planning Starlink, business Wi-Fi, CCTV and everyday technology setups in Zimbabwe.', '/blog/');
export default function BlogPage() { return <TekprofLayout><PageBanner pageName="Blog" title="Practical advice for your next setup." description="Straightforward guides to help you plan connectivity, security and IT." /><BlogIndex /></TekprofLayout>; }
