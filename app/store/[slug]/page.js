import Link from 'next/link';
import { notFound } from 'next/navigation';
import TekprofLayout from '@/layout/TekprofLayout';
import PageBanner from '@/components/PageBanner';
import ProductActions from '@/components/store/ProductActions';
import { products, productById } from '@/data/store';
import { pageMetadata } from '@/utility/metadata';
export function generateStaticParams() { return products.map(product => ({ slug: product.id })); }
export function generateMetadata({ params }) { const product = productById(params.slug); return product ? pageMetadata(product.name, product.summary, `/store/${product.id}/`, product.image || 'security') : {}; }
export default function ProductPage({ params }) {
 const product = productById(params.slug); if (!product) notFound();
 return <TekprofLayout><PageBanner pageName={product.name} parent={{ name: 'Store', href: '/store/' }} /><section className="py-100 rpy-70"><div className="container"><div className="row align-items-start"><div className="col-lg-6"><div className="product-main-image">{product.image ? <img src={`/assets/images/manhenga/${product.image}.webp`} alt={product.alt} width="1000" height="667" /> : <span className="product-icon-art"><i className={`far ${product.icon}`} aria-hidden="true" /></span>}</div><p className="small-note mt-15">Illustrative solution imagery. Exact equipment is confirmed in your quotation.</p></div><div className="col-lg-6 product-detail-copy"><span className="product-category">{product.category}</span><h2>{product.summary}</h2><p>{product.description}</p><ul className="content-list">{product.includes.map(text => <li key={text}>{text}</li>)}</ul><p className="quote-price">Price on quotation</p><p>Ask our team to confirm the model, availability and installation scope before ordering.</p><ProductActions id={product.id} /><Link className="product-contact-link" href="/contact/">Ask a question about this solution</Link></div></div></div></section></TekprofLayout>;
}
