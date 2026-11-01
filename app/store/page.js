import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import StoreCatalog from '@/components/store/StoreCatalog';
import { pageMetadata } from '@/utility/metadata';
export const metadata = pageMetadata('Store', 'Browse Starlink, Wi-Fi, CCTV, alarm and business systems solutions. Build a quotation request and contact Manhenga Tech on WhatsApp.', '/store/', 'connectivity');
export default function StorePage() { return <TekprofLayout><PageBanner pageName="Store" title="Equipment for a better setup." description="Explore solutions, build your quote basket and talk to our team." /><StoreCatalog /></TekprofLayout>; }
