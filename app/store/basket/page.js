import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import QuoteBasket from '@/components/store/QuoteBasket';
import { pageMetadata } from '@/utility/metadata';
export const metadata = { ...pageMetadata('Quote Basket', 'Review your equipment selection and request a quotation from Manhenga Tech.', '/store/basket/'), robots: { index: false, follow: true } };
export default function BasketPage() { return <TekprofLayout><PageBanner pageName="Quote Basket" title="Your setup starts here." parent={{ name: 'Store', href: '/store/' }} /><QuoteBasket /></TekprofLayout>; }
