import Link from 'next/link';
export default function PageBanner({ title, pageName, description, parent }) {
 return <section className="page-banner-area pt-30 rel z-1"><div className="container-fluid"><div className="banner-wrap bgs-cover py-80 manhenga-banner"><div className="container"><div className="banner-inner"><h1 className="page-title mb-20" data-aos="fade-up">{title || pageName}</h1>{description && <p className="banner-description">{description}</p>}<nav aria-label="Breadcrumb"><ol className="breadcrumb"><li className="breadcrumb-item"><Link href="/">Home</Link></li>{parent && <li className="breadcrumb-item"><Link href={parent.href}>{parent.name}</Link></li>}<li className="breadcrumb-item active" aria-current="page">{pageName}</li></ol></nav></div></div></div></div></section>;
}
